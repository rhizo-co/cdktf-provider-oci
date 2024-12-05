# `dataOciDatabaseAutonomousContainerDatabaseResourceUsage` Submodule <a name="`dataOciDatabaseAutonomousContainerDatabaseResourceUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsage <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage oci_database_autonomous_container_database_resource_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.NewDataOciDatabaseAutonomousContainerDatabaseResourceUsage(scope Construct, id *string, config DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig) DataOciDatabaseAutonomousContainerDatabaseResourceUsage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig">DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig">DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseResourceUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousContainerDatabaseResourceUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousContainerDatabaseResourceUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousContainerDatabaseResourceUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousContainerDatabaseResourceUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseVmUsage">AutonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.largestProvisionableAutonomousDatabaseInCpus">LargestProvisionableAutonomousDatabaseInCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionableCpus">ProvisionableCpus</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseVmUsage"></a>

```go
func AutonomousContainerDatabaseVmUsage() DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LargestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="LargestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```go
func LargestProvisionableAutonomousDatabaseInCpus() *f64
```

- *Type:* *f64

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionableCpus"></a>

```go
func ProvisionableCpus() *[]*f64
```

- *Type:* *[]*f64

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseIdInput"></a>

```go
func AutonomousContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

&dataocidatabaseautonomouscontainerdatabaseresourceusage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage {

}
```


### DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

&dataocidatabaseautonomouscontainerdatabaseresourceusage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousContainerDatabaseId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.autonomousContainerDatabaseId"></a>

```go
AutonomousContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#autonomous_container_database_id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#autonomous_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_container_database_resource_usage#id DataOciDatabaseAutonomousContainerDatabaseResourceUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.NewDataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomouscontainerdatabaseresourceusage"

dataocidatabaseautonomouscontainerdatabaseresourceusage.NewDataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousContainerDatabaseResourceUsage.DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage">DataOciDatabaseAutonomousContainerDatabaseResourceUsageAutonomousContainerDatabaseVmUsage</a>

---



