# `dataOciDisasterRecoveryDrPlanExecutions` Submodule <a name="`dataOciDisasterRecoveryDrPlanExecutions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrPlanExecutions <a name="DataOciDisasterRecoveryDrPlanExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions oci_disaster_recovery_dr_plan_executions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutions(scope Construct, id *string, config DataOciDisasterRecoveryDrPlanExecutionsConfig) DataOciDisasterRecoveryDrPlanExecutions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig">DataOciDisasterRecoveryDrPlanExecutionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig">DataOciDisasterRecoveryDrPlanExecutionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDrPlanExecutionId">ResetDrPlanExecutionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDrPlanExecutionId` <a name="ResetDrPlanExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetDrPlanExecutionId"></a>

```go
func ResetDrPlanExecutionId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecutions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecutions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDisasterRecoveryDrPlanExecutions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDisasterRecoveryDrPlanExecutions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrPlanExecutions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionCollection">DrPlanExecutionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList">DataOciDisasterRecoveryDrPlanExecutionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionIdInput">DrPlanExecutionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupIdInput">DrProtectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionId">DrPlanExecutionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DrPlanExecutionCollection`<sup>Required</sup> <a name="DrPlanExecutionCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionCollection"></a>

```go
func DrPlanExecutionCollection() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filter"></a>

```go
func Filter() DataOciDisasterRecoveryDrPlanExecutionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList">DataOciDisasterRecoveryDrPlanExecutionsFilterList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DrPlanExecutionIdInput`<sup>Optional</sup> <a name="DrPlanExecutionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionIdInput"></a>

```go
func DrPlanExecutionIdInput() *string
```

- *Type:* *string

---

##### `DrProtectionGroupIdInput`<sup>Optional</sup> <a name="DrProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupIdInput"></a>

```go
func DrProtectionGroupIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrPlanExecutionId`<sup>Required</sup> <a name="DrPlanExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drPlanExecutionId"></a>

```go
func DrPlanExecutionId() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrPlanExecutionsConfig <a name="DataOciDisasterRecoveryDrPlanExecutionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DrProtectionGroupId: *string,
	DisplayName: *string,
	DrPlanExecutionId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_protection_group_id DataOciDisasterRecoveryDrPlanExecutions#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#display_name DataOciDisasterRecoveryDrPlanExecutions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drPlanExecutionId">DrPlanExecutionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecutions#dr_plan_execution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#id DataOciDisasterRecoveryDrPlanExecutions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#state DataOciDisasterRecoveryDrPlanExecutions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drProtectionGroupId"></a>

```go
DrProtectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_protection_group_id DataOciDisasterRecoveryDrPlanExecutions#dr_protection_group_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#display_name DataOciDisasterRecoveryDrPlanExecutions#display_name}.

---

##### `DrPlanExecutionId`<sup>Optional</sup> <a name="DrPlanExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.drPlanExecutionId"></a>

```go
DrPlanExecutionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecutions#dr_plan_execution_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#filter DataOciDisasterRecoveryDrPlanExecutions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#id DataOciDisasterRecoveryDrPlanExecutions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#state DataOciDisasterRecoveryDrPlanExecutions#state}.

---

### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation {

}
```


### DataOciDisasterRecoveryDrPlanExecutionsFilter <a name="DataOciDisasterRecoveryDrPlanExecutionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

&dataocidisasterrecoverydrplanexecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#name DataOciDisasterRecoveryDrPlanExecutions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#values DataOciDisasterRecoveryDrPlanExecutions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#regex DataOciDisasterRecoveryDrPlanExecutions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#name DataOciDisasterRecoveryDrPlanExecutions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#values DataOciDisasterRecoveryDrPlanExecutions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plan_executions#regex DataOciDisasterRecoveryDrPlanExecutions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.arePrechecksEnabled">ArePrechecksEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.areWarningsIgnored">AreWarningsIgnored</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.planExecutionType">PlanExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArePrechecksEnabled`<sup>Required</sup> <a name="ArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.arePrechecksEnabled"></a>

```go
func ArePrechecksEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AreWarningsIgnored`<sup>Required</sup> <a name="AreWarningsIgnored" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.areWarningsIgnored"></a>

```go
func AreWarningsIgnored() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.planExecutionType"></a>

```go
func PlanExecutionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.stepExecutions">StepExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.executionDurationInSec"></a>

```go
func ExecutionDurationInSec() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `StepExecutions`<sup>Required</sup> <a name="StepExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.stepExecutions"></a>

```go
func StepExecutions() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList</a>

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.stepId">StepId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec"></a>

```go
func ExecutionDurationInSec() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.logLocation"></a>

```go
func LogLocation() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `StepId`<sup>Required</sup> <a name="StepId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.stepId"></a>

```go
func StepId() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionOptions">ExecutionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.groupExecutions">GroupExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerDrProtectionGroupId">PeerDrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planExecutionType">PlanExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planId">PlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionDurationInSec"></a>

```go
func ExecutionDurationInSec() *f64
```

- *Type:* *f64

---

##### `ExecutionOptions`<sup>Required</sup> <a name="ExecutionOptions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.executionOptions"></a>

```go
func ExecutionOptions() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GroupExecutions`<sup>Required</sup> <a name="GroupExecutions" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.groupExecutions"></a>

```go
func GroupExecutions() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```go
func LifeCycleDetails() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.logLocation"></a>

```go
func LogLocation() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList</a>

---

##### `PeerDrProtectionGroupId`<sup>Required</sup> <a name="PeerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerDrProtectionGroupId"></a>

```go
func PeerDrProtectionGroupId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planExecutionType"></a>

```go
func PlanExecutionType() *string
```

- *Type:* *string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.planId"></a>

```go
func PlanId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection">DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection</a>

---


### DataOciDisasterRecoveryDrPlanExecutionsFilterList <a name="DataOciDisasterRecoveryDrPlanExecutionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlanExecutionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference <a name="DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplanexecutions"

dataocidisasterrecoverydrplanexecutions.NewDataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlanExecutions.DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



