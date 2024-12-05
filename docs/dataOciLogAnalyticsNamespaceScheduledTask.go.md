# `dataOciLogAnalyticsNamespaceScheduledTask` Submodule <a name="`dataOciLogAnalyticsNamespaceScheduledTask` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceScheduledTask <a name="DataOciLogAnalyticsNamespaceScheduledTask" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task oci_log_analytics_namespace_scheduled_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTask(scope Construct, id *string, config DataOciLogAnalyticsNamespaceScheduledTaskConfig) DataOciLogAnalyticsNamespaceScheduledTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig">DataOciLogAnalyticsNamespaceScheduledTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig">DataOciLogAnalyticsNamespaceScheduledTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTask_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceScheduledTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsNamespaceScheduledTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceScheduledTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.action">Action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList">DataOciLogAnalyticsNamespaceScheduledTaskActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.numOccurrences">NumOccurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.savedSearchId">SavedSearchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskStatus">TaskStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskIdInput">ScheduledTaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskId">ScheduledTaskId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.action"></a>

```go
func Action() DataOciLogAnalyticsNamespaceScheduledTaskActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList">DataOciLogAnalyticsNamespaceScheduledTaskActionList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `NumOccurrences`<sup>Required</sup> <a name="NumOccurrences" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.numOccurrences"></a>

```go
func NumOccurrences() *string
```

- *Type:* *string

---

##### `SavedSearchId`<sup>Required</sup> <a name="SavedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.savedSearchId"></a>

```go
func SavedSearchId() *string
```

- *Type:* *string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.schedules"></a>

```go
func Schedules() DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TaskStatus`<sup>Required</sup> <a name="TaskStatus" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskStatus"></a>

```go
func TaskStatus() *string
```

- *Type:* *string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ScheduledTaskIdInput`<sup>Optional</sup> <a name="ScheduledTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskIdInput"></a>

```go
func ScheduledTaskIdInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ScheduledTaskId`<sup>Required</sup> <a name="ScheduledTaskId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskId"></a>

```go
func ScheduledTaskId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceScheduledTaskAction <a name="DataOciLogAnalyticsNamespaceScheduledTaskAction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

&dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTaskAction {

}
```


### DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

&dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction {

}
```


### DataOciLogAnalyticsNamespaceScheduledTaskConfig <a name="DataOciLogAnalyticsNamespaceScheduledTaskConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

&dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	ScheduledTaskId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#namespace DataOciLogAnalyticsNamespaceScheduledTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.scheduledTaskId">ScheduledTaskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#scheduled_task_id DataOciLogAnalyticsNamespaceScheduledTask#scheduled_task_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#namespace DataOciLogAnalyticsNamespaceScheduledTask#namespace}.

---

##### `ScheduledTaskId`<sup>Required</sup> <a name="ScheduledTaskId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.scheduledTaskId"></a>

```go
ScheduledTaskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#scheduled_task_id DataOciLogAnalyticsNamespaceScheduledTask#scheduled_task_id}.

---

### DataOciLogAnalyticsNamespaceScheduledTaskSchedules <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

&dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules {

}
```


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

&dataociloganalyticsnamespacescheduledtask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceScheduledTaskActionList <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a>

---


### DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtraction">MetricExtraction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentId">PurgeCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDuration">PurgeDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchId">SavedSearchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction">DataOciLogAnalyticsNamespaceScheduledTaskAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `MetricExtraction`<sup>Required</sup> <a name="MetricExtraction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtraction"></a>

```go
func MetricExtraction() DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList</a>

---

##### `PurgeCompartmentId`<sup>Required</sup> <a name="PurgeCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentId"></a>

```go
func PurgeCompartmentId() *string
```

- *Type:* *string

---

##### `PurgeDuration`<sup>Required</sup> <a name="PurgeDuration" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDuration"></a>

```go
func PurgeDuration() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `SavedSearchId`<sup>Required</sup> <a name="SavedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchId"></a>

```go
func SavedSearchId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceScheduledTaskAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction">DataOciLogAnalyticsNamespaceScheduledTaskAction</a>

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules">DataOciLogAnalyticsNamespaceScheduledTaskSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.schedule"></a>

```go
func Schedule() DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceScheduledTaskSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules">DataOciLogAnalyticsNamespaceScheduledTaskSchedules</a>

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacescheduledtask"

dataociloganalyticsnamespacescheduledtask.NewDataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicy">MisfirePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringInterval">RecurringInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `MisfirePolicy`<sup>Required</sup> <a name="MisfirePolicy" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicy"></a>

```go
func MisfirePolicy() *string
```

- *Type:* *string

---

##### `RecurringInterval`<sup>Required</sup> <a name="RecurringInterval" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringInterval"></a>

```go
func RecurringInterval() *string
```

- *Type:* *string

---

##### `RepeatCount`<sup>Required</sup> <a name="RepeatCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCount"></a>

```go
func RepeatCount() *f64
```

- *Type:* *f64

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule</a>

---



