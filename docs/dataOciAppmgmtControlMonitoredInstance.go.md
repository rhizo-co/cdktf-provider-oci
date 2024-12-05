# `dataOciAppmgmtControlMonitoredInstance` Submodule <a name="`dataOciAppmgmtControlMonitoredInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAppmgmtControlMonitoredInstance <a name="DataOciAppmgmtControlMonitoredInstance" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance oci_appmgmt_control_monitored_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociappmgmtcontrolmonitoredinstance"

dataociappmgmtcontrolmonitoredinstance.NewDataOciAppmgmtControlMonitoredInstance(scope Construct, id *string, config DataOciAppmgmtControlMonitoredInstanceConfig) DataOciAppmgmtControlMonitoredInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig">DataOciAppmgmtControlMonitoredInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig">DataOciAppmgmtControlMonitoredInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociappmgmtcontrolmonitoredinstance"

dataociappmgmtcontrolmonitoredinstance.DataOciAppmgmtControlMonitoredInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociappmgmtcontrolmonitoredinstance"

dataociappmgmtcontrolmonitoredinstance.DataOciAppmgmtControlMonitoredInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociappmgmtcontrolmonitoredinstance"

dataociappmgmtcontrolmonitoredinstance.DataOciAppmgmtControlMonitoredInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociappmgmtcontrolmonitoredinstance"

dataociappmgmtcontrolmonitoredinstance.DataOciAppmgmtControlMonitoredInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAppmgmtControlMonitoredInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAppmgmtControlMonitoredInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAppmgmtControlMonitoredInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoringState">MonitoringState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceIdInput">MonitoredInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceId">MonitoredInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `MonitoringState`<sup>Required</sup> <a name="MonitoringState" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoringState"></a>

```go
func MonitoringState() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonitoredInstanceIdInput`<sup>Optional</sup> <a name="MonitoredInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceIdInput"></a>

```go
func MonitoredInstanceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitoredInstanceId`<sup>Required</sup> <a name="MonitoredInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.monitoredInstanceId"></a>

```go
func MonitoredInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAppmgmtControlMonitoredInstanceConfig <a name="DataOciAppmgmtControlMonitoredInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociappmgmtcontrolmonitoredinstance"

&dataociappmgmtcontrolmonitoredinstance.DataOciAppmgmtControlMonitoredInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitoredInstanceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.monitoredInstanceId">MonitoredInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#monitored_instance_id DataOciAppmgmtControlMonitoredInstance#monitored_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#id DataOciAppmgmtControlMonitoredInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitoredInstanceId`<sup>Required</sup> <a name="MonitoredInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.monitoredInstanceId"></a>

```go
MonitoredInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#monitored_instance_id DataOciAppmgmtControlMonitoredInstance#monitored_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstance.DataOciAppmgmtControlMonitoredInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instance#id DataOciAppmgmtControlMonitoredInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



