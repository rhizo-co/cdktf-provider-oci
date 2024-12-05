# `logAnalyticsNamespaceScheduledTask` Submodule <a name="`logAnalyticsNamespaceScheduledTask` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsNamespaceScheduledTask <a name="LogAnalyticsNamespaceScheduledTask" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task oci_log_analytics_namespace_scheduled_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTask(scope Construct, id *string, config LogAnalyticsNamespaceScheduledTaskConfig) LogAnalyticsNamespaceScheduledTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig">LogAnalyticsNamespaceScheduledTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig">LogAnalyticsNamespaceScheduledTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putSchedules">PutSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetSavedSearchId">ResetSavedSearchId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putAction"></a>

```go
func PutAction(value LogAnalyticsNamespaceScheduledTaskAction)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a>

---

##### `PutSchedules` <a name="PutSchedules" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putSchedules"></a>

```go
func PutSchedules(value LogAnalyticsNamespaceScheduledTaskSchedules)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putSchedules.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsNamespaceScheduledTaskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts">LogAnalyticsNamespaceScheduledTaskTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetId"></a>

```go
func ResetId()
```

##### `ResetSavedSearchId` <a name="ResetSavedSearchId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetSavedSearchId"></a>

```go
func ResetSavedSearchId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsNamespaceScheduledTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsNamespaceScheduledTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsNamespaceScheduledTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.action">Action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference">LogAnalyticsNamespaceScheduledTaskActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.numOccurrences">NumOccurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.scheduledTaskId">ScheduledTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference">LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.taskStatus">TaskStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference">LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.actionInput">ActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.savedSearchIdInput">SavedSearchIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.schedulesInput">SchedulesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.savedSearchId">SavedSearchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.action"></a>

```go
func Action() LogAnalyticsNamespaceScheduledTaskActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference">LogAnalyticsNamespaceScheduledTaskActionOutputReference</a>

---

##### `NumOccurrences`<sup>Required</sup> <a name="NumOccurrences" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.numOccurrences"></a>

```go
func NumOccurrences() *string
```

- *Type:* *string

---

##### `ScheduledTaskId`<sup>Required</sup> <a name="ScheduledTaskId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.scheduledTaskId"></a>

```go
func ScheduledTaskId() *string
```

- *Type:* *string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.schedules"></a>

```go
func Schedules() LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference">LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TaskStatus`<sup>Required</sup> <a name="TaskStatus" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.taskStatus"></a>

```go
func TaskStatus() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference">LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.actionInput"></a>

```go
func ActionInput() LogAnalyticsNamespaceScheduledTaskAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SavedSearchIdInput`<sup>Optional</sup> <a name="SavedSearchIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.savedSearchIdInput"></a>

```go
func SavedSearchIdInput() *string
```

- *Type:* *string

---

##### `SchedulesInput`<sup>Optional</sup> <a name="SchedulesInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.schedulesInput"></a>

```go
func SchedulesInput() LogAnalyticsNamespaceScheduledTaskSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a>

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SavedSearchId`<sup>Required</sup> <a name="SavedSearchId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.savedSearchId"></a>

```go
func SavedSearchId() *string
```

- *Type:* *string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsNamespaceScheduledTaskAction <a name="LogAnalyticsNamespaceScheduledTaskAction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

&loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTaskAction {
	Type: *string,
	CompartmentIdInSubtree: interface{},
	DataType: *string,
	MetricExtraction: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction,
	PurgeCompartmentId: *string,
	PurgeDuration: *string,
	QueryString: *string,
	SavedSearchId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#type LogAnalyticsNamespaceScheduledTask#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id_in_subtree LogAnalyticsNamespaceScheduledTask#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#data_type LogAnalyticsNamespaceScheduledTask#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.metricExtraction">MetricExtraction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a></code> | metric_extraction block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.purgeCompartmentId">PurgeCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#purge_compartment_id LogAnalyticsNamespaceScheduledTask#purge_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.purgeDuration">PurgeDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#purge_duration LogAnalyticsNamespaceScheduledTask#purge_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#query_string LogAnalyticsNamespaceScheduledTask#query_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.savedSearchId">SavedSearchId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#saved_search_id LogAnalyticsNamespaceScheduledTask#saved_search_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#type LogAnalyticsNamespaceScheduledTask#type}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id_in_subtree LogAnalyticsNamespaceScheduledTask#compartment_id_in_subtree}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#data_type LogAnalyticsNamespaceScheduledTask#data_type}.

---

##### `MetricExtraction`<sup>Optional</sup> <a name="MetricExtraction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.metricExtraction"></a>

```go
MetricExtraction LogAnalyticsNamespaceScheduledTaskActionMetricExtraction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a>

metric_extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#metric_extraction LogAnalyticsNamespaceScheduledTask#metric_extraction}

---

##### `PurgeCompartmentId`<sup>Optional</sup> <a name="PurgeCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.purgeCompartmentId"></a>

```go
PurgeCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#purge_compartment_id LogAnalyticsNamespaceScheduledTask#purge_compartment_id}.

---

##### `PurgeDuration`<sup>Optional</sup> <a name="PurgeDuration" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.purgeDuration"></a>

```go
PurgeDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#purge_duration LogAnalyticsNamespaceScheduledTask#purge_duration}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#query_string LogAnalyticsNamespaceScheduledTask#query_string}.

---

##### `SavedSearchId`<sup>Optional</sup> <a name="SavedSearchId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction.property.savedSearchId"></a>

```go
SavedSearchId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#saved_search_id LogAnalyticsNamespaceScheduledTask#saved_search_id}.

---

### LogAnalyticsNamespaceScheduledTaskActionMetricExtraction <a name="LogAnalyticsNamespaceScheduledTaskActionMetricExtraction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

&loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction {
	CompartmentId: *string,
	MetricName: *string,
	Namespace: *string,
	ResourceGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id LogAnalyticsNamespaceScheduledTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#metric_name LogAnalyticsNamespaceScheduledTask#metric_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#namespace LogAnalyticsNamespaceScheduledTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#resource_group LogAnalyticsNamespaceScheduledTask#resource_group}. |

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id LogAnalyticsNamespaceScheduledTask#compartment_id}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#metric_name LogAnalyticsNamespaceScheduledTask#metric_name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#namespace LogAnalyticsNamespaceScheduledTask#namespace}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#resource_group LogAnalyticsNamespaceScheduledTask#resource_group}.

---

### LogAnalyticsNamespaceScheduledTaskConfig <a name="LogAnalyticsNamespaceScheduledTaskConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

&loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction,
	CompartmentId: *string,
	Kind: *string,
	Namespace: *string,
	Schedules: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules,
	TaskType: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	SavedSearchId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.action">Action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a></code> | action block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id LogAnalyticsNamespaceScheduledTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#kind LogAnalyticsNamespaceScheduledTask#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#namespace LogAnalyticsNamespaceScheduledTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a></code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#task_type LogAnalyticsNamespaceScheduledTask#task_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#defined_tags LogAnalyticsNamespaceScheduledTask#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#display_name LogAnalyticsNamespaceScheduledTask#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#freeform_tags LogAnalyticsNamespaceScheduledTask#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#id LogAnalyticsNamespaceScheduledTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.savedSearchId">SavedSearchId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#saved_search_id LogAnalyticsNamespaceScheduledTask#saved_search_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts">LogAnalyticsNamespaceScheduledTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.action"></a>

```go
Action LogAnalyticsNamespaceScheduledTaskAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#action LogAnalyticsNamespaceScheduledTask#action}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id LogAnalyticsNamespaceScheduledTask#compartment_id}.

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#kind LogAnalyticsNamespaceScheduledTask#kind}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#namespace LogAnalyticsNamespaceScheduledTask#namespace}.

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.schedules"></a>

```go
Schedules LogAnalyticsNamespaceScheduledTaskSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a>

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#schedules LogAnalyticsNamespaceScheduledTask#schedules}

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#task_type LogAnalyticsNamespaceScheduledTask#task_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#defined_tags LogAnalyticsNamespaceScheduledTask#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#display_name LogAnalyticsNamespaceScheduledTask#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#freeform_tags LogAnalyticsNamespaceScheduledTask#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#id LogAnalyticsNamespaceScheduledTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SavedSearchId`<sup>Optional</sup> <a name="SavedSearchId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.savedSearchId"></a>

```go
SavedSearchId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#saved_search_id LogAnalyticsNamespaceScheduledTask#saved_search_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsNamespaceScheduledTaskTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts">LogAnalyticsNamespaceScheduledTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#timeouts LogAnalyticsNamespaceScheduledTask#timeouts}

---

### LogAnalyticsNamespaceScheduledTaskSchedules <a name="LogAnalyticsNamespaceScheduledTaskSchedules" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

&loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTaskSchedules {
	Schedule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules.property.schedule">Schedule</a></code> | <code>interface{}</code> | schedule block. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules.property.schedule"></a>

```go
Schedule interface{}
```

- *Type:* interface{}

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#schedule LogAnalyticsNamespaceScheduledTask#schedule}

---

### LogAnalyticsNamespaceScheduledTaskSchedulesSchedule <a name="LogAnalyticsNamespaceScheduledTaskSchedulesSchedule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

&loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule {
	Type: *string,
	Expression: *string,
	MisfirePolicy: *string,
	RecurringInterval: *string,
	RepeatCount: *f64,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#type LogAnalyticsNamespaceScheduledTask#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#expression LogAnalyticsNamespaceScheduledTask#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.misfirePolicy">MisfirePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#misfire_policy LogAnalyticsNamespaceScheduledTask#misfire_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.recurringInterval">RecurringInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#recurring_interval LogAnalyticsNamespaceScheduledTask#recurring_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#repeat_count LogAnalyticsNamespaceScheduledTask#repeat_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#time_zone LogAnalyticsNamespaceScheduledTask#time_zone}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#type LogAnalyticsNamespaceScheduledTask#type}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#expression LogAnalyticsNamespaceScheduledTask#expression}.

---

##### `MisfirePolicy`<sup>Optional</sup> <a name="MisfirePolicy" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.misfirePolicy"></a>

```go
MisfirePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#misfire_policy LogAnalyticsNamespaceScheduledTask#misfire_policy}.

---

##### `RecurringInterval`<sup>Optional</sup> <a name="RecurringInterval" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.recurringInterval"></a>

```go
RecurringInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#recurring_interval LogAnalyticsNamespaceScheduledTask#recurring_interval}.

---

##### `RepeatCount`<sup>Optional</sup> <a name="RepeatCount" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.repeatCount"></a>

```go
RepeatCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#repeat_count LogAnalyticsNamespaceScheduledTask#repeat_count}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesSchedule.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#time_zone LogAnalyticsNamespaceScheduledTask#time_zone}.

---

### LogAnalyticsNamespaceScheduledTaskTimeouts <a name="LogAnalyticsNamespaceScheduledTaskTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

&loganalyticsnamespacescheduledtask.LogAnalyticsNamespaceScheduledTaskTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#create LogAnalyticsNamespaceScheduledTask#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#delete LogAnalyticsNamespaceScheduledTask#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#update LogAnalyticsNamespaceScheduledTask#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#create LogAnalyticsNamespaceScheduledTask#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#delete LogAnalyticsNamespaceScheduledTask#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_scheduled_task#update LogAnalyticsNamespaceScheduledTask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference <a name="LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetMetricName` <a name="ResetMetricName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsNamespaceScheduledTaskActionMetricExtraction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a>

---


### LogAnalyticsNamespaceScheduledTaskActionOutputReference <a name="LogAnalyticsNamespaceScheduledTaskActionOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTaskActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsNamespaceScheduledTaskActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.putMetricExtraction">PutMetricExtraction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetMetricExtraction">ResetMetricExtraction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetPurgeCompartmentId">ResetPurgeCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetPurgeDuration">ResetPurgeDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetSavedSearchId">ResetSavedSearchId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricExtraction` <a name="PutMetricExtraction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.putMetricExtraction"></a>

```go
func PutMetricExtraction(value LogAnalyticsNamespaceScheduledTaskActionMetricExtraction)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.putMetricExtraction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a>

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDataType` <a name="ResetDataType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetMetricExtraction` <a name="ResetMetricExtraction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetMetricExtraction"></a>

```go
func ResetMetricExtraction()
```

##### `ResetPurgeCompartmentId` <a name="ResetPurgeCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetPurgeCompartmentId"></a>

```go
func ResetPurgeCompartmentId()
```

##### `ResetPurgeDuration` <a name="ResetPurgeDuration" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetPurgeDuration"></a>

```go
func ResetPurgeDuration()
```

##### `ResetQueryString` <a name="ResetQueryString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetSavedSearchId` <a name="ResetSavedSearchId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.resetSavedSearchId"></a>

```go
func ResetSavedSearchId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtraction">MetricExtraction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference">LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtractionInput">MetricExtractionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentIdInput">PurgeCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDurationInput">PurgeDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchIdInput">SavedSearchIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentId">PurgeCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDuration">PurgeDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchId">SavedSearchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricExtraction`<sup>Required</sup> <a name="MetricExtraction" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtraction"></a>

```go
func MetricExtraction() LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference">LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference</a>

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `MetricExtractionInput`<sup>Optional</sup> <a name="MetricExtractionInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtractionInput"></a>

```go
func MetricExtractionInput() LogAnalyticsNamespaceScheduledTaskActionMetricExtraction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionMetricExtraction">LogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a>

---

##### `PurgeCompartmentIdInput`<sup>Optional</sup> <a name="PurgeCompartmentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentIdInput"></a>

```go
func PurgeCompartmentIdInput() *string
```

- *Type:* *string

---

##### `PurgeDurationInput`<sup>Optional</sup> <a name="PurgeDurationInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDurationInput"></a>

```go
func PurgeDurationInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `SavedSearchIdInput`<sup>Optional</sup> <a name="SavedSearchIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchIdInput"></a>

```go
func SavedSearchIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `PurgeCompartmentId`<sup>Required</sup> <a name="PurgeCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentId"></a>

```go
func PurgeCompartmentId() *string
```

- *Type:* *string

---

##### `PurgeDuration`<sup>Required</sup> <a name="PurgeDuration" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDuration"></a>

```go
func PurgeDuration() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `SavedSearchId`<sup>Required</sup> <a name="SavedSearchId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchId"></a>

```go
func SavedSearchId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskActionOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsNamespaceScheduledTaskAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskAction">LogAnalyticsNamespaceScheduledTaskAction</a>

---


### LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference <a name="LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.putSchedule"></a>

```go
func PutSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.putSchedule.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList">LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.schedule"></a>

```go
func Schedule() LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList">LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsNamespaceScheduledTaskSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedules">LogAnalyticsNamespaceScheduledTaskSchedules</a>

---


### LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList <a name="LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get"></a>

```go
func Get(index *f64) LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference <a name="LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetMisfirePolicy">ResetMisfirePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetRecurringInterval">ResetRecurringInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetRepeatCount">ResetRepeatCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetMisfirePolicy` <a name="ResetMisfirePolicy" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetMisfirePolicy"></a>

```go
func ResetMisfirePolicy()
```

##### `ResetRecurringInterval` <a name="ResetRecurringInterval" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetRecurringInterval"></a>

```go
func ResetRecurringInterval()
```

##### `ResetRepeatCount` <a name="ResetRepeatCount" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetRepeatCount"></a>

```go
func ResetRepeatCount()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicyInput">MisfirePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringIntervalInput">RecurringIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCountInput">RepeatCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicy">MisfirePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringInterval">RecurringInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCount">RepeatCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `MisfirePolicyInput`<sup>Optional</sup> <a name="MisfirePolicyInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicyInput"></a>

```go
func MisfirePolicyInput() *string
```

- *Type:* *string

---

##### `RecurringIntervalInput`<sup>Optional</sup> <a name="RecurringIntervalInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringIntervalInput"></a>

```go
func RecurringIntervalInput() *string
```

- *Type:* *string

---

##### `RepeatCountInput`<sup>Optional</sup> <a name="RepeatCountInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCountInput"></a>

```go
func RepeatCountInput() *f64
```

- *Type:* *f64

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `MisfirePolicy`<sup>Required</sup> <a name="MisfirePolicy" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicy"></a>

```go
func MisfirePolicy() *string
```

- *Type:* *string

---

##### `RecurringInterval`<sup>Required</sup> <a name="RecurringInterval" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringInterval"></a>

```go
func RecurringInterval() *string
```

- *Type:* *string

---

##### `RepeatCount`<sup>Required</sup> <a name="RepeatCount" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCount"></a>

```go
func RepeatCount() *f64
```

- *Type:* *f64

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference <a name="LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsnamespacescheduledtask"

loganalyticsnamespacescheduledtask.NewLogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceScheduledTask.LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



