# `dataOciOsmanagementManagedInstance` Submodule <a name="`dataOciOsmanagementManagedInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstance <a name="DataOciOsmanagementManagedInstance" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance oci_osmanagement_managed_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstance(scope Construct, id *string, config DataOciOsmanagementManagedInstanceConfig) DataOciOsmanagementManagedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig">DataOciOsmanagementManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig">DataOciOsmanagementManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstance_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsmanagementManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsmanagementManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.autonomous">Autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList">DataOciOsmanagementManagedInstanceAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.bugUpdatesAvailable">BugUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.childSoftwareSources">ChildSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList">DataOciOsmanagementManagedInstanceChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.enhancementUpdatesAvailable">EnhancementUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.isRebootRequired">IsRebootRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.kspliceEffectiveKernelVersion">KspliceEffectiveKernelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.lastBoot">LastBoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.lastCheckin">LastCheckin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.managedInstanceGroups">ManagedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList">DataOciOsmanagementManagedInstanceManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.notificationTopicId">NotificationTopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osKernelVersion">OsKernelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osName">OsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.otherUpdatesAvailable">OtherUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.parentSoftwareSource">ParentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList">DataOciOsmanagementManagedInstanceParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.scheduledJobCount">ScheduledJobCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.securityUpdatesAvailable">SecurityUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.updatesAvailable">UpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.workRequestCount">WorkRequestCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Autonomous`<sup>Required</sup> <a name="Autonomous" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.autonomous"></a>

```go
func Autonomous() DataOciOsmanagementManagedInstanceAutonomousList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList">DataOciOsmanagementManagedInstanceAutonomousList</a>

---

##### `BugUpdatesAvailable`<sup>Required</sup> <a name="BugUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.bugUpdatesAvailable"></a>

```go
func BugUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `ChildSoftwareSources`<sup>Required</sup> <a name="ChildSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.childSoftwareSources"></a>

```go
func ChildSoftwareSources() DataOciOsmanagementManagedInstanceChildSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList">DataOciOsmanagementManagedInstanceChildSoftwareSourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnhancementUpdatesAvailable`<sup>Required</sup> <a name="EnhancementUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.enhancementUpdatesAvailable"></a>

```go
func EnhancementUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDataCollectionAuthorized`<sup>Required</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.isDataCollectionAuthorized"></a>

```go
func IsDataCollectionAuthorized() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRebootRequired`<sup>Required</sup> <a name="IsRebootRequired" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.isRebootRequired"></a>

```go
func IsRebootRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KspliceEffectiveKernelVersion`<sup>Required</sup> <a name="KspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.kspliceEffectiveKernelVersion"></a>

```go
func KspliceEffectiveKernelVersion() *string
```

- *Type:* *string

---

##### `LastBoot`<sup>Required</sup> <a name="LastBoot" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.lastBoot"></a>

```go
func LastBoot() *string
```

- *Type:* *string

---

##### `LastCheckin`<sup>Required</sup> <a name="LastCheckin" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.lastCheckin"></a>

```go
func LastCheckin() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroups`<sup>Required</sup> <a name="ManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.managedInstanceGroups"></a>

```go
func ManagedInstanceGroups() DataOciOsmanagementManagedInstanceManagedInstanceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList">DataOciOsmanagementManagedInstanceManagedInstanceGroupsList</a>

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.notificationTopicId"></a>

```go
func NotificationTopicId() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `OsKernelVersion`<sup>Required</sup> <a name="OsKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osKernelVersion"></a>

```go
func OsKernelVersion() *string
```

- *Type:* *string

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osName"></a>

```go
func OsName() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `OtherUpdatesAvailable`<sup>Required</sup> <a name="OtherUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.otherUpdatesAvailable"></a>

```go
func OtherUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `ParentSoftwareSource`<sup>Required</sup> <a name="ParentSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.parentSoftwareSource"></a>

```go
func ParentSoftwareSource() DataOciOsmanagementManagedInstanceParentSoftwareSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList">DataOciOsmanagementManagedInstanceParentSoftwareSourceList</a>

---

##### `ScheduledJobCount`<sup>Required</sup> <a name="ScheduledJobCount" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.scheduledJobCount"></a>

```go
func ScheduledJobCount() *f64
```

- *Type:* *f64

---

##### `SecurityUpdatesAvailable`<sup>Required</sup> <a name="SecurityUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.securityUpdatesAvailable"></a>

```go
func SecurityUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatesAvailable`<sup>Required</sup> <a name="UpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.updatesAvailable"></a>

```go
func UpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `WorkRequestCount`<sup>Required</sup> <a name="WorkRequestCount" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.workRequestCount"></a>

```go
func WorkRequestCount() *f64
```

- *Type:* *f64

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceAutonomous <a name="DataOciOsmanagementManagedInstanceAutonomous" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomous.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

&dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstanceAutonomous {

}
```


### DataOciOsmanagementManagedInstanceChildSoftwareSources <a name="DataOciOsmanagementManagedInstanceChildSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

&dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstanceChildSoftwareSources {

}
```


### DataOciOsmanagementManagedInstanceConfig <a name="DataOciOsmanagementManagedInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

&dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance#managed_instance_id DataOciOsmanagementManagedInstance#managed_instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance#managed_instance_id DataOciOsmanagementManagedInstance#managed_instance_id}.

---

### DataOciOsmanagementManagedInstanceManagedInstanceGroups <a name="DataOciOsmanagementManagedInstanceManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

&dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstanceManagedInstanceGroups {

}
```


### DataOciOsmanagementManagedInstanceParentSoftwareSource <a name="DataOciOsmanagementManagedInstanceParentSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

&dataociosmanagementmanagedinstance.DataOciOsmanagementManagedInstanceParentSoftwareSource {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceAutonomousList <a name="DataOciOsmanagementManagedInstanceAutonomousList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceAutonomousList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceAutonomousList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceAutonomousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceAutonomousOutputReference <a name="DataOciOsmanagementManagedInstanceAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceAutonomousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceAutonomousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled">IsAutoUpdateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomous">DataOciOsmanagementManagedInstanceAutonomous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsAutoUpdateEnabled`<sup>Required</sup> <a name="IsAutoUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```go
func IsAutoUpdateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomousOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceAutonomous
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceAutonomous">DataOciOsmanagementManagedInstanceAutonomous</a>

---


### DataOciOsmanagementManagedInstanceChildSoftwareSourcesList <a name="DataOciOsmanagementManagedInstanceChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceChildSoftwareSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceChildSoftwareSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference <a name="DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSources">DataOciOsmanagementManagedInstanceChildSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceChildSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceChildSoftwareSources">DataOciOsmanagementManagedInstanceChildSoftwareSources</a>

---


### DataOciOsmanagementManagedInstanceManagedInstanceGroupsList <a name="DataOciOsmanagementManagedInstanceManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceManagedInstanceGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceManagedInstanceGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference <a name="DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroups">DataOciOsmanagementManagedInstanceManagedInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceManagedInstanceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceManagedInstanceGroups">DataOciOsmanagementManagedInstanceManagedInstanceGroups</a>

---


### DataOciOsmanagementManagedInstanceParentSoftwareSourceList <a name="DataOciOsmanagementManagedInstanceParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceParentSoftwareSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceParentSoftwareSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference <a name="DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstance"

dataociosmanagementmanagedinstance.NewDataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSource">DataOciOsmanagementManagedInstanceParentSoftwareSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstance.DataOciOsmanagementManagedInstanceParentSoftwareSource">DataOciOsmanagementManagedInstanceParentSoftwareSource</a>

---



