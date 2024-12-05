# `dataOciStackMonitoringMonitoredResourceTask` Submodule <a name="`dataOciStackMonitoringMonitoredResourceTask` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResourceTask <a name="DataOciStackMonitoringMonitoredResourceTask" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.NewDataOciStackMonitoringMonitoredResourceTask(scope Construct, id *string, config DataOciStackMonitoringMonitoredResourceTaskConfig) DataOciStackMonitoringMonitoredResourceTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig">DataOciStackMonitoringMonitoredResourceTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig">DataOciStackMonitoringMonitoredResourceTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.DataOciStackMonitoringMonitoredResourceTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.DataOciStackMonitoringMonitoredResourceTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.DataOciStackMonitoringMonitoredResourceTask_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.DataOciStackMonitoringMonitoredResourceTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciStackMonitoringMonitoredResourceTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.taskDetails">TaskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList">DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.workRequestIds">WorkRequestIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskIdInput">MonitoredResourceTaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskId">MonitoredResourceTaskId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.taskDetails"></a>

```go
func TaskDetails() DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList">DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkRequestIds`<sup>Required</sup> <a name="WorkRequestIds" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.workRequestIds"></a>

```go
func WorkRequestIds() *[]*string
```

- *Type:* *[]*string

---

##### `MonitoredResourceTaskIdInput`<sup>Optional</sup> <a name="MonitoredResourceTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskIdInput"></a>

```go
func MonitoredResourceTaskIdInput() *string
```

- *Type:* *string

---

##### `MonitoredResourceTaskId`<sup>Required</sup> <a name="MonitoredResourceTaskId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.monitoredResourceTaskId"></a>

```go
func MonitoredResourceTaskId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourceTaskConfig <a name="DataOciStackMonitoringMonitoredResourceTaskConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

&dataocistackmonitoringmonitoredresourcetask.DataOciStackMonitoringMonitoredResourceTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitoredResourceTaskId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.monitoredResourceTaskId">MonitoredResourceTaskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitoredResourceTaskId`<sup>Required</sup> <a name="MonitoredResourceTaskId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskConfig.property.monitoredResourceTaskId"></a>

```go
MonitoredResourceTaskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}.

---

### DataOciStackMonitoringMonitoredResourceTaskTaskDetails <a name="DataOciStackMonitoringMonitoredResourceTaskTaskDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

&dataocistackmonitoringmonitoredresourcetask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList <a name="DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.NewDataOciStackMonitoringMonitoredResourceTaskTaskDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmonitoredresourcetask"

dataocistackmonitoringmonitoredresourcetask.NewDataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">AvailabilityProxyMetricCollectionInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics">AvailabilityProxyMetrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix">ConsolePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping">ExternalIdMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">LifecycleStatusMappingsForUpStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter">ResourceNameFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping">ResourceNameMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter">ResourceTypeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping">ResourceTypeMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl">ServiceBaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">ShouldUseMetricsFlowForStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails">DataOciStackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityProxyMetricCollectionInterval`<sup>Required</sup> <a name="AvailabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```go
func AvailabilityProxyMetricCollectionInterval() *f64
```

- *Type:* *f64

---

##### `AvailabilityProxyMetrics`<sup>Required</sup> <a name="AvailabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```go
func AvailabilityProxyMetrics() *[]*string
```

- *Type:* *[]*string

---

##### `ConsolePathPrefix`<sup>Required</sup> <a name="ConsolePathPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix"></a>

```go
func ConsolePathPrefix() *string
```

- *Type:* *string

---

##### `ExternalIdMapping`<sup>Required</sup> <a name="ExternalIdMapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping"></a>

```go
func ExternalIdMapping() *string
```

- *Type:* *string

---

##### `LifecycleStatusMappingsForUpStatus`<sup>Required</sup> <a name="LifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```go
func LifecycleStatusMappingsForUpStatus() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceNameFilter`<sup>Required</sup> <a name="ResourceNameFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter"></a>

```go
func ResourceNameFilter() *string
```

- *Type:* *string

---

##### `ResourceNameMapping`<sup>Required</sup> <a name="ResourceNameMapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping"></a>

```go
func ResourceNameMapping() *string
```

- *Type:* *string

---

##### `ResourceTypeFilter`<sup>Required</sup> <a name="ResourceTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```go
func ResourceTypeFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeMapping`<sup>Required</sup> <a name="ResourceTypeMapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```go
func ResourceTypeMapping() *string
```

- *Type:* *string

---

##### `ServiceBaseUrl`<sup>Required</sup> <a name="ServiceBaseUrl" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```go
func ServiceBaseUrl() *string
```

- *Type:* *string

---

##### `ShouldUseMetricsFlowForStatus`<sup>Required</sup> <a name="ShouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```go
func ShouldUseMetricsFlowForStatus() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMonitoredResourceTaskTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTask.DataOciStackMonitoringMonitoredResourceTaskTaskDetails">DataOciStackMonitoringMonitoredResourceTaskTaskDetails</a>

---



