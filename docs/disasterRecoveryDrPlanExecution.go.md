# `disasterRecoveryDrPlanExecution` Submodule <a name="`disasterRecoveryDrPlanExecution` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrPlanExecution <a name="DisasterRecoveryDrPlanExecution" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution oci_disaster_recovery_dr_plan_execution}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecution(scope Construct, id *string, config DisasterRecoveryDrPlanExecutionConfig) DisasterRecoveryDrPlanExecution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig">DisasterRecoveryDrPlanExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig">DisasterRecoveryDrPlanExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions">PutExecutionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExecutionOptions` <a name="PutExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions"></a>

```go
func PutExecutionOptions(value DisasterRecoveryDrPlanExecutionExecutionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts"></a>

```go
func PutTimeouts(value DisasterRecoveryDrPlanExecutionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DisasterRecoveryDrPlanExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DisasterRecoveryDrPlanExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrPlanExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptions">ExecutionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference">DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.groupExecutions">GroupExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList">DisasterRecoveryDrPlanExecutionLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId">PeerDrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planExecutionType">PlanExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference">DisasterRecoveryDrPlanExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptionsInput">ExecutionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planIdInput">PlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planId">PlanId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionDurationInSec"></a>

```go
func ExecutionDurationInSec() *f64
```

- *Type:* *f64

---

##### `ExecutionOptions`<sup>Required</sup> <a name="ExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptions"></a>

```go
func ExecutionOptions() DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference">DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference</a>

---

##### `GroupExecutions`<sup>Required</sup> <a name="GroupExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.groupExecutions"></a>

```go
func GroupExecutions() DisasterRecoveryDrPlanExecutionGroupExecutionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsList</a>

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifeCycleDetails"></a>

```go
func LifeCycleDetails() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.logLocation"></a>

```go
func LogLocation() DisasterRecoveryDrPlanExecutionLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList">DisasterRecoveryDrPlanExecutionLogLocationList</a>

---

##### `PeerDrProtectionGroupId`<sup>Required</sup> <a name="PeerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId"></a>

```go
func PeerDrProtectionGroupId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planExecutionType"></a>

```go
func PlanExecutionType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeouts"></a>

```go
func Timeouts() DisasterRecoveryDrPlanExecutionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference">DisasterRecoveryDrPlanExecutionTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionOptionsInput`<sup>Optional</sup> <a name="ExecutionOptionsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptionsInput"></a>

```go
func ExecutionOptionsInput() DisasterRecoveryDrPlanExecutionExecutionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlanIdInput`<sup>Optional</sup> <a name="PlanIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planIdInput"></a>

```go
func PlanIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planId"></a>

```go
func PlanId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrPlanExecutionConfig <a name="DisasterRecoveryDrPlanExecutionConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExecutionOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions,
	PlanId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.executionOptions">ExecutionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | execution_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.planId">PlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_id DisasterRecoveryDrPlanExecution#plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#defined_tags DisasterRecoveryDrPlanExecution#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#display_name DisasterRecoveryDrPlanExecution#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#freeform_tags DisasterRecoveryDrPlanExecution#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#id DisasterRecoveryDrPlanExecution#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionOptions`<sup>Required</sup> <a name="ExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.executionOptions"></a>

```go
ExecutionOptions DisasterRecoveryDrPlanExecutionExecutionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

execution_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#execution_options DisasterRecoveryDrPlanExecution#execution_options}

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.planId"></a>

```go
PlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_id DisasterRecoveryDrPlanExecution#plan_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#defined_tags DisasterRecoveryDrPlanExecution#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#display_name DisasterRecoveryDrPlanExecution#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#freeform_tags DisasterRecoveryDrPlanExecution#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#id DisasterRecoveryDrPlanExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.timeouts"></a>

```go
Timeouts DisasterRecoveryDrPlanExecutionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#timeouts DisasterRecoveryDrPlanExecution#timeouts}

---

### DisasterRecoveryDrPlanExecutionExecutionOptions <a name="DisasterRecoveryDrPlanExecutionExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionExecutionOptions {
	PlanExecutionType: *string,
	ArePrechecksEnabled: interface{},
	AreWarningsIgnored: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.planExecutionType">PlanExecutionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_execution_type DisasterRecoveryDrPlanExecution#plan_execution_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.arePrechecksEnabled">ArePrechecksEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_prechecks_enabled DisasterRecoveryDrPlanExecution#are_prechecks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.areWarningsIgnored">AreWarningsIgnored</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_warnings_ignored DisasterRecoveryDrPlanExecution#are_warnings_ignored}. |

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.planExecutionType"></a>

```go
PlanExecutionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_execution_type DisasterRecoveryDrPlanExecution#plan_execution_type}.

---

##### `ArePrechecksEnabled`<sup>Optional</sup> <a name="ArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.arePrechecksEnabled"></a>

```go
ArePrechecksEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_prechecks_enabled DisasterRecoveryDrPlanExecution#are_prechecks_enabled}.

---

##### `AreWarningsIgnored`<sup>Optional</sup> <a name="AreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.areWarningsIgnored"></a>

```go
AreWarningsIgnored interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_warnings_ignored DisasterRecoveryDrPlanExecution#are_warnings_ignored}.

---

### DisasterRecoveryDrPlanExecutionGroupExecutions <a name="DisasterRecoveryDrPlanExecutionGroupExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionGroupExecutions {

}
```


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions {

}
```


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation {

}
```


### DisasterRecoveryDrPlanExecutionLogLocation <a name="DisasterRecoveryDrPlanExecutionLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionLogLocation {

}
```


### DisasterRecoveryDrPlanExecutionTimeouts <a name="DisasterRecoveryDrPlanExecutionTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

&disasterrecoverydrplanexecution.DisasterRecoveryDrPlanExecutionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#create DisasterRecoveryDrPlanExecution#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#delete DisasterRecoveryDrPlanExecution#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#update DisasterRecoveryDrPlanExecution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#create DisasterRecoveryDrPlanExecution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#delete DisasterRecoveryDrPlanExecution#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#update DisasterRecoveryDrPlanExecution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference <a name="DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetArePrechecksEnabled">ResetArePrechecksEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetAreWarningsIgnored">ResetAreWarningsIgnored</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArePrechecksEnabled` <a name="ResetArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetArePrechecksEnabled"></a>

```go
func ResetArePrechecksEnabled()
```

##### `ResetAreWarningsIgnored` <a name="ResetAreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetAreWarningsIgnored"></a>

```go
func ResetAreWarningsIgnored()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabledInput">ArePrechecksEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnoredInput">AreWarningsIgnoredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionTypeInput">PlanExecutionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled">ArePrechecksEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored">AreWarningsIgnored</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType">PlanExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArePrechecksEnabledInput`<sup>Optional</sup> <a name="ArePrechecksEnabledInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabledInput"></a>

```go
func ArePrechecksEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AreWarningsIgnoredInput`<sup>Optional</sup> <a name="AreWarningsIgnoredInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnoredInput"></a>

```go
func AreWarningsIgnoredInput() interface{}
```

- *Type:* interface{}

---

##### `PlanExecutionTypeInput`<sup>Optional</sup> <a name="PlanExecutionTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionTypeInput"></a>

```go
func PlanExecutionTypeInput() *string
```

- *Type:* *string

---

##### `ArePrechecksEnabled`<sup>Required</sup> <a name="ArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled"></a>

```go
func ArePrechecksEnabled() interface{}
```

- *Type:* interface{}

---

##### `AreWarningsIgnored`<sup>Required</sup> <a name="AreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored"></a>

```go
func AreWarningsIgnored() interface{}
```

- *Type:* interface{}

---

##### `PlanExecutionType`<sup>Required</sup> <a name="PlanExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType"></a>

```go
func PlanExecutionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanExecutionExecutionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionGroupExecutionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanExecutionGroupExecutionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions">StepExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions">DisasterRecoveryDrPlanExecutionGroupExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec"></a>

```go
func ExecutionDurationInSec() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `StepExecutions`<sup>Required</sup> <a name="StepExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions"></a>

```go
func StepExecutions() DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a>

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanExecutionGroupExecutions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions">DisasterRecoveryDrPlanExecutionGroupExecutions</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec">ExecutionDurationInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId">StepId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionDurationInSec`<sup>Required</sup> <a name="ExecutionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec"></a>

```go
func ExecutionDurationInSec() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation"></a>

```go
func LogLocation() DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `StepId`<sup>Required</sup> <a name="StepId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId"></a>

```go
func StepId() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a>

---


### DisasterRecoveryDrPlanExecutionLogLocationList <a name="DisasterRecoveryDrPlanExecutionLogLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionLogLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanExecutionLogLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanExecutionLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanExecutionLogLocationOutputReference <a name="DisasterRecoveryDrPlanExecutionLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionLogLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanExecutionLogLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation">DisasterRecoveryDrPlanExecutionLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanExecutionLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation">DisasterRecoveryDrPlanExecutionLogLocation</a>

---


### DisasterRecoveryDrPlanExecutionTimeoutsOutputReference <a name="DisasterRecoveryDrPlanExecutionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplanexecution"

disasterrecoverydrplanexecution.NewDisasterRecoveryDrPlanExecutionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DisasterRecoveryDrPlanExecutionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



