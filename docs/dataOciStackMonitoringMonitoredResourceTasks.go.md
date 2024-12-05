# `dataOciStackMonitoringMonitoredResourceTasks` Submodule <a name="`dataOciStackMonitoringMonitoredResourceTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResourceTasks <a name="DataOciStackMonitoringMonitoredResourceTasks" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks oci_stack_monitoring_monitored_resource_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasks(scope Construct, id *string, config DataOciStackMonitoringMonitoredResourceTasksConfig) DataOciStackMonitoringMonitoredResourceTasks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig">DataOciStackMonitoringMonitoredResourceTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig">DataOciStackMonitoringMonitoredResourceTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTasks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTasks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciStackMonitoringMonitoredResourceTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList">DataOciStackMonitoringMonitoredResourceTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.monitoredResourceTasksCollection">MonitoredResourceTasksCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filter"></a>

```go
func Filter() DataOciStackMonitoringMonitoredResourceTasksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList">DataOciStackMonitoringMonitoredResourceTasksFilterList</a>

---

##### `MonitoredResourceTasksCollection`<sup>Required</sup> <a name="MonitoredResourceTasksCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.monitoredResourceTasksCollection"></a>

```go
func MonitoredResourceTasksCollection() DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourceTasksConfig <a name="DataOciStackMonitoringMonitoredResourceTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

&dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#filter DataOciStackMonitoringMonitoredResourceTasks#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}.

---

### DataOciStackMonitoringMonitoredResourceTasksFilter <a name="DataOciStackMonitoringMonitoredResourceTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

&dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasksFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#name DataOciStackMonitoringMonitoredResourceTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#values DataOciStackMonitoringMonitoredResourceTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#regex DataOciStackMonitoringMonitoredResourceTasks#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#name DataOciStackMonitoringMonitoredResourceTasks#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#values DataOciStackMonitoringMonitoredResourceTasks#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#regex DataOciStackMonitoringMonitoredResourceTasks#regex}.

---

### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

&dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection {

}
```


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

&dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems {

}
```


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

&dataocistackmonitoringmonitoredresourcetasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourceTasksFilterList <a name="DataOciStackMonitoringMonitoredResourceTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMonitoredResourceTasksFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.taskDetails">TaskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.workRequestIds">WorkRequestIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.taskDetails"></a>

```go
func TaskDetails() DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkRequestIds`<sup>Required</sup> <a name="WorkRequestIds" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.workRequestIds"></a>

```go
func WorkRequestIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">AvailabilityProxyMetricCollectionInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetrics">AvailabilityProxyMetrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.consolePathPrefix">ConsolePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.externalIdMapping">ExternalIdMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">LifecycleStatusMappingsForUpStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameFilter">ResourceNameFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameMapping">ResourceNameMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeFilter">ResourceTypeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeMapping">ResourceTypeMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.serviceBaseUrl">ServiceBaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">ShouldUseMetricsFlowForStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityProxyMetricCollectionInterval`<sup>Required</sup> <a name="AvailabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```go
func AvailabilityProxyMetricCollectionInterval() *f64
```

- *Type:* *f64

---

##### `AvailabilityProxyMetrics`<sup>Required</sup> <a name="AvailabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```go
func AvailabilityProxyMetrics() *[]*string
```

- *Type:* *[]*string

---

##### `ConsolePathPrefix`<sup>Required</sup> <a name="ConsolePathPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.consolePathPrefix"></a>

```go
func ConsolePathPrefix() *string
```

- *Type:* *string

---

##### `ExternalIdMapping`<sup>Required</sup> <a name="ExternalIdMapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.externalIdMapping"></a>

```go
func ExternalIdMapping() *string
```

- *Type:* *string

---

##### `LifecycleStatusMappingsForUpStatus`<sup>Required</sup> <a name="LifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```go
func LifecycleStatusMappingsForUpStatus() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceNameFilter`<sup>Required</sup> <a name="ResourceNameFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameFilter"></a>

```go
func ResourceNameFilter() *string
```

- *Type:* *string

---

##### `ResourceNameMapping`<sup>Required</sup> <a name="ResourceNameMapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameMapping"></a>

```go
func ResourceNameMapping() *string
```

- *Type:* *string

---

##### `ResourceTypeFilter`<sup>Required</sup> <a name="ResourceTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```go
func ResourceTypeFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeMapping`<sup>Required</sup> <a name="ResourceTypeMapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```go
func ResourceTypeMapping() *string
```

- *Type:* *string

---

##### `ServiceBaseUrl`<sup>Required</sup> <a name="ServiceBaseUrl" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```go
func ServiceBaseUrl() *string
```

- *Type:* *string

---

##### `ShouldUseMetricsFlowForStatus`<sup>Required</sup> <a name="ShouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```go
func ShouldUseMetricsFlowForStatus() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails</a>

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetasks"

dataocistackmonitoringmonitoredresourcetasks.NewDataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.items"></a>

```go
func Items() DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection</a>

---



