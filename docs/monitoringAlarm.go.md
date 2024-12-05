# `monitoringAlarm` Submodule <a name="`monitoringAlarm` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarm <a name="MonitoringAlarm" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm oci_monitoring_alarm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.NewMonitoringAlarm(scope Construct, id *string, config MonitoringAlarmConfig) MonitoringAlarm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig">MonitoringAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig">MonitoringAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression">PutSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary">ResetAlarmSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration">ResetEvaluationSlackDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled">ResetIsNotificationsPerMetricDimensionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree">ResetMetricCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle">ResetNotificationTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion">ResetNotificationVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration">ResetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration">ResetRepeatNotificationDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution">ResetResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression">ResetSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOverrides` <a name="PutOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides"></a>

```go
func PutOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSuppression` <a name="PutSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression"></a>

```go
func PutSuppression(value MonitoringAlarmSuppression)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts"></a>

```go
func PutTimeouts(value MonitoringAlarmTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---

##### `ResetAlarmSummary` <a name="ResetAlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary"></a>

```go
func ResetAlarmSummary()
```

##### `ResetBody` <a name="ResetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody"></a>

```go
func ResetBody()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetEvaluationSlackDuration` <a name="ResetEvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration"></a>

```go
func ResetEvaluationSlackDuration()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId"></a>

```go
func ResetId()
```

##### `ResetIsNotificationsPerMetricDimensionEnabled` <a name="ResetIsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled"></a>

```go
func ResetIsNotificationsPerMetricDimensionEnabled()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat"></a>

```go
func ResetMessageFormat()
```

##### `ResetMetricCompartmentIdInSubtree` <a name="ResetMetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree"></a>

```go
func ResetMetricCompartmentIdInSubtree()
```

##### `ResetNotificationTitle` <a name="ResetNotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle"></a>

```go
func ResetNotificationTitle()
```

##### `ResetNotificationVersion` <a name="ResetNotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion"></a>

```go
func ResetNotificationVersion()
```

##### `ResetOverrides` <a name="ResetOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides"></a>

```go
func ResetOverrides()
```

##### `ResetPendingDuration` <a name="ResetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration"></a>

```go
func ResetPendingDuration()
```

##### `ResetRepeatNotificationDuration` <a name="ResetRepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration"></a>

```go
func ResetRepeatNotificationDuration()
```

##### `ResetResolution` <a name="ResetResolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution"></a>

```go
func ResetResolution()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetRuleName` <a name="ResetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetSuppression` <a name="ResetSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression"></a>

```go
func ResetSuppression()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.MonitoringAlarm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.MonitoringAlarm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.MonitoringAlarm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.MonitoringAlarm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitoringAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitoringAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides">Overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression">Suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput">AlarmSummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput">EvaluationSlackDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput">IsNotificationsPerMetricDimensionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput">MessageFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput">MetricCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput">MetricCompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput">NotificationTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput">NotificationVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput">OverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput">PendingDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput">RepeatNotificationDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput">ResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput">SuppressionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary">AlarmSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration">EvaluationSlackDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled">IsNotificationsPerMetricDimensionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId">MetricCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree">MetricCompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle">NotificationTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion">NotificationVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration">PendingDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration">RepeatNotificationDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution">Resolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides"></a>

```go
func Overrides() MonitoringAlarmOverridesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Suppression`<sup>Required</sup> <a name="Suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression"></a>

```go
func Suppression() MonitoringAlarmSuppressionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts"></a>

```go
func Timeouts() MonitoringAlarmTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AlarmSummaryInput`<sup>Optional</sup> <a name="AlarmSummaryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput"></a>

```go
func AlarmSummaryInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvaluationSlackDurationInput`<sup>Optional</sup> <a name="EvaluationSlackDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput"></a>

```go
func EvaluationSlackDurationInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsNotificationsPerMetricDimensionEnabledInput`<sup>Optional</sup> <a name="IsNotificationsPerMetricDimensionEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput"></a>

```go
func IsNotificationsPerMetricDimensionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput"></a>

```go
func MessageFormatInput() *string
```

- *Type:* *string

---

##### `MetricCompartmentIdInput`<sup>Optional</sup> <a name="MetricCompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput"></a>

```go
func MetricCompartmentIdInput() *string
```

- *Type:* *string

---

##### `MetricCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="MetricCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput"></a>

```go
func MetricCompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NotificationTitleInput`<sup>Optional</sup> <a name="NotificationTitleInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput"></a>

```go
func NotificationTitleInput() *string
```

- *Type:* *string

---

##### `NotificationVersionInput`<sup>Optional</sup> <a name="NotificationVersionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput"></a>

```go
func NotificationVersionInput() *string
```

- *Type:* *string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput"></a>

```go
func OverridesInput() interface{}
```

- *Type:* interface{}

---

##### `PendingDurationInput`<sup>Optional</sup> <a name="PendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput"></a>

```go
func PendingDurationInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RepeatNotificationDurationInput`<sup>Optional</sup> <a name="RepeatNotificationDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput"></a>

```go
func RepeatNotificationDurationInput() *string
```

- *Type:* *string

---

##### `ResolutionInput`<sup>Optional</sup> <a name="ResolutionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput"></a>

```go
func ResolutionInput() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `SuppressionInput`<sup>Optional</sup> <a name="SuppressionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput"></a>

```go
func SuppressionInput() MonitoringAlarmSuppression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AlarmSummary`<sup>Required</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary"></a>

```go
func AlarmSummary() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EvaluationSlackDuration`<sup>Required</sup> <a name="EvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration"></a>

```go
func EvaluationSlackDuration() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsNotificationsPerMetricDimensionEnabled`<sup>Required</sup> <a name="IsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled"></a>

```go
func IsNotificationsPerMetricDimensionEnabled() interface{}
```

- *Type:* interface{}

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `MetricCompartmentId`<sup>Required</sup> <a name="MetricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId"></a>

```go
func MetricCompartmentId() *string
```

- *Type:* *string

---

##### `MetricCompartmentIdInSubtree`<sup>Required</sup> <a name="MetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree"></a>

```go
func MetricCompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NotificationTitle`<sup>Required</sup> <a name="NotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle"></a>

```go
func NotificationTitle() *string
```

- *Type:* *string

---

##### `NotificationVersion`<sup>Required</sup> <a name="NotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion"></a>

```go
func NotificationVersion() *string
```

- *Type:* *string

---

##### `PendingDuration`<sup>Required</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration"></a>

```go
func PendingDuration() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RepeatNotificationDuration`<sup>Required</sup> <a name="RepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration"></a>

```go
func RepeatNotificationDuration() *string
```

- *Type:* *string

---

##### `Resolution`<sup>Required</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution"></a>

```go
func Resolution() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmConfig <a name="MonitoringAlarmConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

&monitoringalarm.MonitoringAlarmConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Destinations: *[]*string,
	DisplayName: *string,
	IsEnabled: interface{},
	MetricCompartmentId: *string,
	Namespace: *string,
	Query: *string,
	Severity: *string,
	AlarmSummary: *string,
	Body: *string,
	DefinedTags: *map[string]*string,
	EvaluationSlackDuration: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsNotificationsPerMetricDimensionEnabled: interface{},
	MessageFormat: *string,
	MetricCompartmentIdInSubtree: interface{},
	NotificationTitle: *string,
	NotificationVersion: *string,
	Overrides: interface{},
	PendingDuration: *string,
	RepeatNotificationDuration: *string,
	Resolution: *string,
	ResourceGroup: *string,
	RuleName: *string,
	Suppression: github.com/rhizo-co/cdktf-provider-oci-go/oci.monitoringAlarm.MonitoringAlarmSuppression,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.monitoringAlarm.MonitoringAlarmTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations">Destinations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId">MetricCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary">AlarmSummary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration">EvaluationSlackDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled">IsNotificationsPerMetricDimensionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree">MetricCompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle">NotificationTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion">NotificationVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides">Overrides</a></code> | <code>interface{}</code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration">PendingDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration">RepeatNotificationDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution">Resolution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression">Suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `MetricCompartmentId`<sup>Required</sup> <a name="MetricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId"></a>

```go
MetricCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `AlarmSummary`<sup>Optional</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary"></a>

```go
AlarmSummary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `EvaluationSlackDuration`<sup>Optional</sup> <a name="EvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration"></a>

```go
EvaluationSlackDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsNotificationsPerMetricDimensionEnabled`<sup>Optional</sup> <a name="IsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled"></a>

```go
IsNotificationsPerMetricDimensionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat"></a>

```go
MessageFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `MetricCompartmentIdInSubtree`<sup>Optional</sup> <a name="MetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree"></a>

```go
MetricCompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `NotificationTitle`<sup>Optional</sup> <a name="NotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle"></a>

```go
NotificationTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `NotificationVersion`<sup>Optional</sup> <a name="NotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion"></a>

```go
NotificationVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides"></a>

```go
Overrides interface{}
```

- *Type:* interface{}

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `PendingDuration`<sup>Optional</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration"></a>

```go
PendingDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `RepeatNotificationDuration`<sup>Optional</sup> <a name="RepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration"></a>

```go
RepeatNotificationDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `Resolution`<sup>Optional</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution"></a>

```go
Resolution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `Suppression`<sup>Optional</sup> <a name="Suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression"></a>

```go
Suppression MonitoringAlarmSuppression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts"></a>

```go
Timeouts MonitoringAlarmTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}

---

### MonitoringAlarmOverrides <a name="MonitoringAlarmOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

&monitoringalarm.MonitoringAlarmOverrides {
	Body: *string,
	PendingDuration: *string,
	Query: *string,
	RuleName: *string,
	Severity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration">PendingDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `PendingDuration`<sup>Optional</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration"></a>

```go
PendingDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

### MonitoringAlarmSuppression <a name="MonitoringAlarmSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

&monitoringalarm.MonitoringAlarmSuppression {
	TimeSuppressFrom: *string,
	TimeSuppressUntil: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}. |

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom"></a>

```go
TimeSuppressFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}.

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil"></a>

```go
TimeSuppressUntil *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}.

---

### MonitoringAlarmTimeouts <a name="MonitoringAlarmTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

&monitoringalarm.MonitoringAlarmTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmOverridesList <a name="MonitoringAlarmOverridesList" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.NewMonitoringAlarmOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitoringAlarmOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get"></a>

```go
func Get(index *f64) MonitoringAlarmOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringAlarmOverridesOutputReference <a name="MonitoringAlarmOverridesOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.NewMonitoringAlarmOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitoringAlarmOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration">ResetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBody` <a name="ResetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetPendingDuration` <a name="ResetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration"></a>

```go
func ResetPendingDuration()
```

##### `ResetQuery` <a name="ResetQuery" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetRuleName` <a name="ResetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput">PendingDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration">PendingDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `PendingDurationInput`<sup>Optional</sup> <a name="PendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput"></a>

```go
func PendingDurationInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `PendingDuration`<sup>Required</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration"></a>

```go
func PendingDuration() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringAlarmSuppressionOutputReference <a name="MonitoringAlarmSuppressionOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.NewMonitoringAlarmSuppressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringAlarmSuppressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput">TimeSuppressFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput">TimeSuppressUntilInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `TimeSuppressFromInput`<sup>Optional</sup> <a name="TimeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput"></a>

```go
func TimeSuppressFromInput() *string
```

- *Type:* *string

---

##### `TimeSuppressUntilInput`<sup>Optional</sup> <a name="TimeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput"></a>

```go
func TimeSuppressUntilInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom"></a>

```go
func TimeSuppressFrom() *string
```

- *Type:* *string

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil"></a>

```go
func TimeSuppressUntil() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringAlarmSuppression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---


### MonitoringAlarmTimeoutsOutputReference <a name="MonitoringAlarmTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/monitoringalarm"

monitoringalarm.NewMonitoringAlarmTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringAlarmTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



