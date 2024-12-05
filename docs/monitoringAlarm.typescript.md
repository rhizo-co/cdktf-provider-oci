# `monitoringAlarm` Submodule <a name="`monitoringAlarm` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarm <a name="MonitoringAlarm" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm oci_monitoring_alarm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarm.MonitoringAlarm(scope: Construct, id: string, config: MonitoringAlarmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig">MonitoringAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig">MonitoringAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression">putSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary">resetAlarmSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration">resetEvaluationSlackDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled">resetIsNotificationsPerMetricDimensionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree">resetMetricCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle">resetNotificationTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion">resetNotificationVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration">resetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration">resetRepeatNotificationDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution">resetResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression">resetSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOverrides` <a name="putOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | MonitoringAlarmOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]

---

##### `putSuppression` <a name="putSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression"></a>

```typescript
public putSuppression(value: MonitoringAlarmSuppression): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitoringAlarmTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---

##### `resetAlarmSummary` <a name="resetAlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary"></a>

```typescript
public resetAlarmSummary(): void
```

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetEvaluationSlackDuration` <a name="resetEvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration"></a>

```typescript
public resetEvaluationSlackDuration(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsNotificationsPerMetricDimensionEnabled` <a name="resetIsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled"></a>

```typescript
public resetIsNotificationsPerMetricDimensionEnabled(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetMetricCompartmentIdInSubtree` <a name="resetMetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree"></a>

```typescript
public resetMetricCompartmentIdInSubtree(): void
```

##### `resetNotificationTitle` <a name="resetNotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle"></a>

```typescript
public resetNotificationTitle(): void
```

##### `resetNotificationVersion` <a name="resetNotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion"></a>

```typescript
public resetNotificationVersion(): void
```

##### `resetOverrides` <a name="resetOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetPendingDuration` <a name="resetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration"></a>

```typescript
public resetPendingDuration(): void
```

##### `resetRepeatNotificationDuration` <a name="resetRepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration"></a>

```typescript
public resetRepeatNotificationDuration(): void
```

##### `resetResolution` <a name="resetResolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution"></a>

```typescript
public resetResolution(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetRuleName` <a name="resetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSuppression` <a name="resetSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression"></a>

```typescript
public resetSuppression(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

monitoringAlarm.MonitoringAlarm.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

monitoringAlarm.MonitoringAlarm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

monitoringAlarm.MonitoringAlarm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

monitoringAlarm.MonitoringAlarm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides">overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput">alarmSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput">destinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput">evaluationSlackDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput">isNotificationsPerMetricDimensionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput">metricCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput">metricCompartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput">notificationTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput">notificationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput">overridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput">pendingDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput">repeatNotificationDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput">resolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput">suppressionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary">alarmSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration">evaluationSlackDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled">isNotificationsPerMetricDimensionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId">metricCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree">metricCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle">notificationTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion">notificationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration">pendingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration">repeatNotificationDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution">resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity">severity</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides"></a>

```typescript
public readonly overrides: MonitoringAlarmOverridesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression"></a>

```typescript
public readonly suppression: MonitoringAlarmSuppressionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringAlarmTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `alarmSummaryInput`<sup>Optional</sup> <a name="alarmSummaryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput"></a>

```typescript
public readonly alarmSummaryInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evaluationSlackDurationInput`<sup>Optional</sup> <a name="evaluationSlackDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput"></a>

```typescript
public readonly evaluationSlackDurationInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNotificationsPerMetricDimensionEnabledInput`<sup>Optional</sup> <a name="isNotificationsPerMetricDimensionEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput"></a>

```typescript
public readonly isNotificationsPerMetricDimensionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `metricCompartmentIdInput`<sup>Optional</sup> <a name="metricCompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput"></a>

```typescript
public readonly metricCompartmentIdInput: string;
```

- *Type:* string

---

##### `metricCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="metricCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput"></a>

```typescript
public readonly metricCompartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `notificationTitleInput`<sup>Optional</sup> <a name="notificationTitleInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput"></a>

```typescript
public readonly notificationTitleInput: string;
```

- *Type:* string

---

##### `notificationVersionInput`<sup>Optional</sup> <a name="notificationVersionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput"></a>

```typescript
public readonly notificationVersionInput: string;
```

- *Type:* string

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | MonitoringAlarmOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]

---

##### `pendingDurationInput`<sup>Optional</sup> <a name="pendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput"></a>

```typescript
public readonly pendingDurationInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `repeatNotificationDurationInput`<sup>Optional</sup> <a name="repeatNotificationDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput"></a>

```typescript
public readonly repeatNotificationDurationInput: string;
```

- *Type:* string

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput"></a>

```typescript
public readonly resolutionInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `suppressionInput`<sup>Optional</sup> <a name="suppressionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput"></a>

```typescript
public readonly suppressionInput: MonitoringAlarmSuppression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitoringAlarmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---

##### `alarmSummary`<sup>Required</sup> <a name="alarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary"></a>

```typescript
public readonly alarmSummary: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `evaluationSlackDuration`<sup>Required</sup> <a name="evaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration"></a>

```typescript
public readonly evaluationSlackDuration: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNotificationsPerMetricDimensionEnabled`<sup>Required</sup> <a name="isNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled"></a>

```typescript
public readonly isNotificationsPerMetricDimensionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `metricCompartmentId`<sup>Required</sup> <a name="metricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId"></a>

```typescript
public readonly metricCompartmentId: string;
```

- *Type:* string

---

##### `metricCompartmentIdInSubtree`<sup>Required</sup> <a name="metricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree"></a>

```typescript
public readonly metricCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notificationTitle`<sup>Required</sup> <a name="notificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle"></a>

```typescript
public readonly notificationTitle: string;
```

- *Type:* string

---

##### `notificationVersion`<sup>Required</sup> <a name="notificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion"></a>

```typescript
public readonly notificationVersion: string;
```

- *Type:* string

---

##### `pendingDuration`<sup>Required</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration"></a>

```typescript
public readonly pendingDuration: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `repeatNotificationDuration`<sup>Required</sup> <a name="repeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration"></a>

```typescript
public readonly repeatNotificationDuration: string;
```

- *Type:* string

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmConfig <a name="MonitoringAlarmConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmConfig: monitoringAlarm.MonitoringAlarmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations">destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId">metricCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary">alarmSummary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration">evaluationSlackDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled">isNotificationsPerMetricDimensionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree">metricCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle">notificationTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion">notificationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides">overrides</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]</code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration">pendingDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration">repeatNotificationDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution">resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `metricCompartmentId`<sup>Required</sup> <a name="metricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId"></a>

```typescript
public readonly metricCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `alarmSummary`<sup>Optional</sup> <a name="alarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary"></a>

```typescript
public readonly alarmSummary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `evaluationSlackDuration`<sup>Optional</sup> <a name="evaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration"></a>

```typescript
public readonly evaluationSlackDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNotificationsPerMetricDimensionEnabled`<sup>Optional</sup> <a name="isNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled"></a>

```typescript
public readonly isNotificationsPerMetricDimensionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `metricCompartmentIdInSubtree`<sup>Optional</sup> <a name="metricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree"></a>

```typescript
public readonly metricCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `notificationTitle`<sup>Optional</sup> <a name="notificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle"></a>

```typescript
public readonly notificationTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `notificationVersion`<sup>Optional</sup> <a name="notificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion"></a>

```typescript
public readonly notificationVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | MonitoringAlarmOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `pendingDuration`<sup>Optional</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration"></a>

```typescript
public readonly pendingDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `repeatNotificationDuration`<sup>Optional</sup> <a name="repeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration"></a>

```typescript
public readonly repeatNotificationDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `suppression`<sup>Optional</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression"></a>

```typescript
public readonly suppression: MonitoringAlarmSuppression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringAlarmTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}

---

### MonitoringAlarmOverrides <a name="MonitoringAlarmOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmOverrides: monitoringAlarm.MonitoringAlarmOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration">pendingDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity">severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `pendingDuration`<sup>Optional</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration"></a>

```typescript
public readonly pendingDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

### MonitoringAlarmSuppression <a name="MonitoringAlarmSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmSuppression: monitoringAlarm.MonitoringAlarmSuppression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}. |

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom"></a>

```typescript
public readonly timeSuppressFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}.

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil"></a>

```typescript
public readonly timeSuppressUntil: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}.

---

### MonitoringAlarmTimeouts <a name="MonitoringAlarmTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

const monitoringAlarmTimeouts: monitoringAlarm.MonitoringAlarmTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmOverridesList <a name="MonitoringAlarmOverridesList" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarm.MonitoringAlarmOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get"></a>

```typescript
public get(index: number): MonitoringAlarmOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringAlarmOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>[]

---


### MonitoringAlarmOverridesOutputReference <a name="MonitoringAlarmOverridesOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarm.MonitoringAlarmOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration">resetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetPendingDuration` <a name="resetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration"></a>

```typescript
public resetPendingDuration(): void
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetRuleName` <a name="resetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput">pendingDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration">pendingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `pendingDurationInput`<sup>Optional</sup> <a name="pendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput"></a>

```typescript
public readonly pendingDurationInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `pendingDuration`<sup>Required</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration"></a>

```typescript
public readonly pendingDuration: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringAlarmOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>

---


### MonitoringAlarmSuppressionOutputReference <a name="MonitoringAlarmSuppressionOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarm.MonitoringAlarmSuppressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput">timeSuppressFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput">timeSuppressUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `timeSuppressFromInput`<sup>Optional</sup> <a name="timeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput"></a>

```typescript
public readonly timeSuppressFromInput: string;
```

- *Type:* string

---

##### `timeSuppressUntilInput`<sup>Optional</sup> <a name="timeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput"></a>

```typescript
public readonly timeSuppressUntilInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom"></a>

```typescript
public readonly timeSuppressFrom: string;
```

- *Type:* string

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil"></a>

```typescript
public readonly timeSuppressUntil: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringAlarmSuppression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---


### MonitoringAlarmTimeoutsOutputReference <a name="MonitoringAlarmTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitoringAlarm } from 'rhizo-co-terraform-provider-oci'

new monitoringAlarm.MonitoringAlarmTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringAlarmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---



