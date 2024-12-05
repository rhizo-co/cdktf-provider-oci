# `apmSyntheticsMonitor` Submodule <a name="`apmSyntheticsMonitor` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsMonitor <a name="ApmSyntheticsMonitor" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor oci_apm_synthetics_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitor(scope: Construct, id: string, config: ApmSyntheticsMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig">ApmSyntheticsMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig">ApmSyntheticsMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration">putAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule">putMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters">putScriptParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints">putVantagePoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetAvailabilityConfiguration">resetAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetBatchIntervalInSeconds">resetBatchIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsIpv6">resetIsIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunNow">resetIsRunNow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunOnce">resetIsRunOnce</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetMaintenanceWindowSchedule">resetMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptId">resetScriptId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptParameters">resetScriptParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilityConfiguration` <a name="putAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration"></a>

```typescript
public putAvailabilityConfiguration(value: ApmSyntheticsMonitorAvailabilityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---

##### `putConfiguration` <a name="putConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration"></a>

```typescript
public putConfiguration(value: ApmSyntheticsMonitorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---

##### `putMaintenanceWindowSchedule` <a name="putMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule"></a>

```typescript
public putMaintenanceWindowSchedule(value: ApmSyntheticsMonitorMaintenanceWindowSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---

##### `putScriptParameters` <a name="putScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters"></a>

```typescript
public putScriptParameters(value: IResolvable | ApmSyntheticsMonitorScriptParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: ApmSyntheticsMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

---

##### `putVantagePoints` <a name="putVantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints"></a>

```typescript
public putVantagePoints(value: IResolvable | ApmSyntheticsMonitorVantagePoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]

---

##### `resetAvailabilityConfiguration` <a name="resetAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetAvailabilityConfiguration"></a>

```typescript
public resetAvailabilityConfiguration(): void
```

##### `resetBatchIntervalInSeconds` <a name="resetBatchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetBatchIntervalInSeconds"></a>

```typescript
public resetBatchIntervalInSeconds(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsIpv6` <a name="resetIsIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsIpv6"></a>

```typescript
public resetIsIpv6(): void
```

##### `resetIsRunNow` <a name="resetIsRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunNow"></a>

```typescript
public resetIsRunNow(): void
```

##### `resetIsRunOnce` <a name="resetIsRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunOnce"></a>

```typescript
public resetIsRunOnce(): void
```

##### `resetMaintenanceWindowSchedule` <a name="resetMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetMaintenanceWindowSchedule"></a>

```typescript
public resetMaintenanceWindowSchedule(): void
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetSchedulingPolicy"></a>

```typescript
public resetSchedulingPolicy(): void
```

##### `resetScriptId` <a name="resetScriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptId"></a>

```typescript
public resetScriptId(): void
```

##### `resetScriptName` <a name="resetScriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptName"></a>

```typescript
public resetScriptName(): void
```

##### `resetScriptParameters` <a name="resetScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptParameters"></a>

```typescript
public resetScriptParameters(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApmSyntheticsMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApmSyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfiguration">availabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference">ApmSyntheticsMonitorAvailabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference">ApmSyntheticsMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowSchedule">maintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference">ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParameters">scriptParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList">ApmSyntheticsMonitorScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference">ApmSyntheticsMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointCount">vantagePointCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePoints">vantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList">ApmSyntheticsMonitorVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfigurationInput">availabilityConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSecondsInput">batchIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configurationInput">configurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6Input">isIpv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNowInput">isRunNowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnceInput">isRunOnceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowScheduleInput">maintenanceWindowScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorTypeInput">monitorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSecondsInput">repeatIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptIdInput">scriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptNameInput">scriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParametersInput">scriptParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointsInput">vantagePointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSeconds">batchIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6">isIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNow">isRunNow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnce">isRunOnce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorType">monitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSeconds">repeatIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptId">scriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityConfiguration`<sup>Required</sup> <a name="availabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfiguration"></a>

```typescript
public readonly availabilityConfiguration: ApmSyntheticsMonitorAvailabilityConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference">ApmSyntheticsMonitorAvailabilityConfigurationOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configuration"></a>

```typescript
public readonly configuration: ApmSyntheticsMonitorConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference">ApmSyntheticsMonitorConfigurationOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `maintenanceWindowSchedule`<sup>Required</sup> <a name="maintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowSchedule"></a>

```typescript
public readonly maintenanceWindowSchedule: ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference">ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference</a>

---

##### `scriptParameters`<sup>Required</sup> <a name="scriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParameters"></a>

```typescript
public readonly scriptParameters: ApmSyntheticsMonitorScriptParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList">ApmSyntheticsMonitorScriptParametersList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: ApmSyntheticsMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference">ApmSyntheticsMonitorTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vantagePointCount`<sup>Required</sup> <a name="vantagePointCount" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointCount"></a>

```typescript
public readonly vantagePointCount: number;
```

- *Type:* number

---

##### `vantagePoints`<sup>Required</sup> <a name="vantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePoints"></a>

```typescript
public readonly vantagePoints: ApmSyntheticsMonitorVantagePointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList">ApmSyntheticsMonitorVantagePointsList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `availabilityConfigurationInput`<sup>Optional</sup> <a name="availabilityConfigurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfigurationInput"></a>

```typescript
public readonly availabilityConfigurationInput: ApmSyntheticsMonitorAvailabilityConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---

##### `batchIntervalInSecondsInput`<sup>Optional</sup> <a name="batchIntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSecondsInput"></a>

```typescript
public readonly batchIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configurationInput"></a>

```typescript
public readonly configurationInput: ApmSyntheticsMonitorConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isIpv6Input`<sup>Optional</sup> <a name="isIpv6Input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6Input"></a>

```typescript
public readonly isIpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRunNowInput`<sup>Optional</sup> <a name="isRunNowInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNowInput"></a>

```typescript
public readonly isRunNowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRunOnceInput`<sup>Optional</sup> <a name="isRunOnceInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnceInput"></a>

```typescript
public readonly isRunOnceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceWindowScheduleInput`<sup>Optional</sup> <a name="maintenanceWindowScheduleInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowScheduleInput"></a>

```typescript
public readonly maintenanceWindowScheduleInput: ApmSyntheticsMonitorMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---

##### `monitorTypeInput`<sup>Optional</sup> <a name="monitorTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorTypeInput"></a>

```typescript
public readonly monitorTypeInput: string;
```

- *Type:* string

---

##### `repeatIntervalInSecondsInput`<sup>Optional</sup> <a name="repeatIntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSecondsInput"></a>

```typescript
public readonly repeatIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicyInput"></a>

```typescript
public readonly schedulingPolicyInput: string;
```

- *Type:* string

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptIdInput"></a>

```typescript
public readonly scriptIdInput: string;
```

- *Type:* string

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptNameInput"></a>

```typescript
public readonly scriptNameInput: string;
```

- *Type:* string

---

##### `scriptParametersInput`<sup>Optional</sup> <a name="scriptParametersInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParametersInput"></a>

```typescript
public readonly scriptParametersInput: IResolvable | ApmSyntheticsMonitorScriptParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApmSyntheticsMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

---

##### `vantagePointsInput`<sup>Optional</sup> <a name="vantagePointsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointsInput"></a>

```typescript
public readonly vantagePointsInput: IResolvable | ApmSyntheticsMonitorVantagePoints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `batchIntervalInSeconds`<sup>Required</sup> <a name="batchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSeconds"></a>

```typescript
public readonly batchIntervalInSeconds: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIpv6`<sup>Required</sup> <a name="isIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6"></a>

```typescript
public readonly isIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRunNow`<sup>Required</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNow"></a>

```typescript
public readonly isRunNow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRunOnce`<sup>Required</sup> <a name="isRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnce"></a>

```typescript
public readonly isRunOnce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

---

##### `repeatIntervalInSeconds`<sup>Required</sup> <a name="repeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSeconds"></a>

```typescript
public readonly repeatIntervalInSeconds: number;
```

- *Type:* number

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsMonitorAvailabilityConfiguration <a name="ApmSyntheticsMonitorAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorAvailabilityConfiguration: apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.maxAllowedFailuresPerInterval">maxAllowedFailuresPerInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.minAllowedRunsPerInterval">minAllowedRunsPerInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}. |

---

##### `maxAllowedFailuresPerInterval`<sup>Optional</sup> <a name="maxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.maxAllowedFailuresPerInterval"></a>

```typescript
public readonly maxAllowedFailuresPerInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}.

---

##### `minAllowedRunsPerInterval`<sup>Optional</sup> <a name="minAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.minAllowedRunsPerInterval"></a>

```typescript
public readonly minAllowedRunsPerInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}.

---

### ApmSyntheticsMonitorConfig <a name="ApmSyntheticsMonitorConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfig: apmSyntheticsMonitor.ApmSyntheticsMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.monitorType">monitorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.repeatIntervalInSeconds">repeatIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.vantagePoints">vantagePoints</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]</code> | vantage_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.availabilityConfiguration">availabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | availability_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.batchIntervalInSeconds">batchIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isIpv6">isIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunNow">isRunNow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunOnce">isRunOnce</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.maintenanceWindowSchedule">maintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | maintenance_window_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.schedulingPolicy">schedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptId">scriptId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptName">scriptName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptParameters">scriptParameters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]</code> | script_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}.

---

##### `repeatIntervalInSeconds`<sup>Required</sup> <a name="repeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.repeatIntervalInSeconds"></a>

```typescript
public readonly repeatIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}.

---

##### `vantagePoints`<sup>Required</sup> <a name="vantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.vantagePoints"></a>

```typescript
public readonly vantagePoints: IResolvable | ApmSyntheticsMonitorVantagePoints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]

vantage_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vantage_points ApmSyntheticsMonitor#vantage_points}

---

##### `availabilityConfiguration`<sup>Optional</sup> <a name="availabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.availabilityConfiguration"></a>

```typescript
public readonly availabilityConfiguration: ApmSyntheticsMonitorAvailabilityConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

availability_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#availability_configuration ApmSyntheticsMonitor#availability_configuration}

---

##### `batchIntervalInSeconds`<sup>Optional</sup> <a name="batchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.batchIntervalInSeconds"></a>

```typescript
public readonly batchIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.configuration"></a>

```typescript
public readonly configuration: ApmSyntheticsMonitorConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#configuration ApmSyntheticsMonitor#configuration}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIpv6`<sup>Optional</sup> <a name="isIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isIpv6"></a>

```typescript
public readonly isIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}.

---

##### `isRunNow`<sup>Optional</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunNow"></a>

```typescript
public readonly isRunNow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}.

---

##### `isRunOnce`<sup>Optional</sup> <a name="isRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunOnce"></a>

```typescript
public readonly isRunOnce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}.

---

##### `maintenanceWindowSchedule`<sup>Optional</sup> <a name="maintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.maintenanceWindowSchedule"></a>

```typescript
public readonly maintenanceWindowSchedule: ApmSyntheticsMonitorMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

maintenance_window_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#maintenance_window_schedule ApmSyntheticsMonitor#maintenance_window_schedule}

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.schedulingPolicy"></a>

```typescript
public readonly schedulingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}.

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}.

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}.

---

##### `scriptParameters`<sup>Optional</sup> <a name="scriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptParameters"></a>

```typescript
public readonly scriptParameters: IResolvable | ApmSyntheticsMonitorScriptParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]

script_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_parameters ApmSyntheticsMonitor#script_parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApmSyntheticsMonitorTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeouts ApmSyntheticsMonitor#timeouts}

---

### ApmSyntheticsMonitorConfiguration <a name="ApmSyntheticsMonitorConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfiguration: apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.clientCertificateDetails">clientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | client_certificate_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.configType">configType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseAuthenticationDetails">databaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | database_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseConnectionType">databaseConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseRole">databaseRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseType">databaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseWalletDetails">databaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | database_wallet_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.dnsConfiguration">dnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | dns_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.downloadSizeLimitInBytes">downloadSizeLimitInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpBasicAuthenticationDetails">ftpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | ftp_basic_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpProtocol">ftpProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpRequestType">ftpRequestType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isActiveMode">isActiveMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isCertificateValidationEnabled">isCertificateValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isDefaultSnapshotEnabled">isDefaultSnapshotEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isFailureRetried">isFailureRetried</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isQueryRecursive">isQueryRecursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isRedirectionEnabled">isRedirectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.nameServer">nameServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.recordType">recordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationDetails">reqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | req_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationScheme">reqAuthenticationScheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestHeaders">requestHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]</code> | request_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestMethod">requestMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestPostBody">requestPostBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestQueryParams">requestQueryParams</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]</code> | request_query_params block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.uploadFileSizeInBytes">uploadFileSizeInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseCodes">verifyResponseCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseContent">verifyResponseContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyTexts">verifyTexts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]</code> | verify_texts block. |

---

##### `clientCertificateDetails`<sup>Optional</sup> <a name="clientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.clientCertificateDetails"></a>

```typescript
public readonly clientCertificateDetails: ApmSyntheticsMonitorConfigurationClientCertificateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

client_certificate_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate_details ApmSyntheticsMonitor#client_certificate_details}

---

##### `configType`<sup>Optional</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}.

---

##### `databaseAuthenticationDetails`<sup>Optional</sup> <a name="databaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseAuthenticationDetails"></a>

```typescript
public readonly databaseAuthenticationDetails: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

database_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_authentication_details ApmSyntheticsMonitor#database_authentication_details}

---

##### `databaseConnectionType`<sup>Optional</sup> <a name="databaseConnectionType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseConnectionType"></a>

```typescript
public readonly databaseConnectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}.

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}.

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}.

---

##### `databaseWalletDetails`<sup>Optional</sup> <a name="databaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseWalletDetails"></a>

```typescript
public readonly databaseWalletDetails: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

database_wallet_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet_details ApmSyntheticsMonitor#database_wallet_details}

---

##### `dnsConfiguration`<sup>Optional</sup> <a name="dnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.dnsConfiguration"></a>

```typescript
public readonly dnsConfiguration: ApmSyntheticsMonitorConfigurationDnsConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#dns_configuration ApmSyntheticsMonitor#dns_configuration}

---

##### `downloadSizeLimitInBytes`<sup>Optional</sup> <a name="downloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.downloadSizeLimitInBytes"></a>

```typescript
public readonly downloadSizeLimitInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}.

---

##### `ftpBasicAuthenticationDetails`<sup>Optional</sup> <a name="ftpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpBasicAuthenticationDetails"></a>

```typescript
public readonly ftpBasicAuthenticationDetails: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

ftp_basic_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_basic_authentication_details ApmSyntheticsMonitor#ftp_basic_authentication_details}

---

##### `ftpProtocol`<sup>Optional</sup> <a name="ftpProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpProtocol"></a>

```typescript
public readonly ftpProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}.

---

##### `ftpRequestType`<sup>Optional</sup> <a name="ftpRequestType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpRequestType"></a>

```typescript
public readonly ftpRequestType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}.

---

##### `isActiveMode`<sup>Optional</sup> <a name="isActiveMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isActiveMode"></a>

```typescript
public readonly isActiveMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}.

---

##### `isCertificateValidationEnabled`<sup>Optional</sup> <a name="isCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isCertificateValidationEnabled"></a>

```typescript
public readonly isCertificateValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}.

---

##### `isDefaultSnapshotEnabled`<sup>Optional</sup> <a name="isDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isDefaultSnapshotEnabled"></a>

```typescript
public readonly isDefaultSnapshotEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}.

---

##### `isFailureRetried`<sup>Optional</sup> <a name="isFailureRetried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isFailureRetried"></a>

```typescript
public readonly isFailureRetried: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}.

---

##### `isQueryRecursive`<sup>Optional</sup> <a name="isQueryRecursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isQueryRecursive"></a>

```typescript
public readonly isQueryRecursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}.

---

##### `isRedirectionEnabled`<sup>Optional</sup> <a name="isRedirectionEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isRedirectionEnabled"></a>

```typescript
public readonly isRedirectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.nameServer"></a>

```typescript
public readonly nameServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: ApmSyntheticsMonitorConfigurationNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#network_configuration ApmSyntheticsMonitor#network_configuration}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}.

---

##### `recordType`<sup>Optional</sup> <a name="recordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}.

---

##### `reqAuthenticationDetails`<sup>Optional</sup> <a name="reqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationDetails"></a>

```typescript
public readonly reqAuthenticationDetails: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

req_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_details ApmSyntheticsMonitor#req_authentication_details}

---

##### `reqAuthenticationScheme`<sup>Optional</sup> <a name="reqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationScheme"></a>

```typescript
public readonly reqAuthenticationScheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}.

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: IResolvable | ApmSyntheticsMonitorConfigurationRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_headers ApmSyntheticsMonitor#request_headers}

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}.

---

##### `requestPostBody`<sup>Optional</sup> <a name="requestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestPostBody"></a>

```typescript
public readonly requestPostBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}.

---

##### `requestQueryParams`<sup>Optional</sup> <a name="requestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestQueryParams"></a>

```typescript
public readonly requestQueryParams: IResolvable | ApmSyntheticsMonitorConfigurationRequestQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]

request_query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_query_params ApmSyntheticsMonitor#request_query_params}

---

##### `uploadFileSizeInBytes`<sup>Optional</sup> <a name="uploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.uploadFileSizeInBytes"></a>

```typescript
public readonly uploadFileSizeInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}.

---

##### `verifyResponseCodes`<sup>Optional</sup> <a name="verifyResponseCodes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseCodes"></a>

```typescript
public readonly verifyResponseCodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}.

---

##### `verifyResponseContent`<sup>Optional</sup> <a name="verifyResponseContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseContent"></a>

```typescript
public readonly verifyResponseContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}.

---

##### `verifyTexts`<sup>Optional</sup> <a name="verifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyTexts"></a>

```typescript
public readonly verifyTexts: IResolvable | ApmSyntheticsMonitorConfigurationVerifyTexts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]

verify_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_texts ApmSyntheticsMonitor#verify_texts}

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetails <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationClientCertificateDetails: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.clientCertificate">clientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | client_certificate block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.privateKey">privateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | private_key block. |

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate ApmSyntheticsMonitor#client_certificate}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.privateKey"></a>

```typescript
public readonly privateKey: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

private_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#private_key ApmSyntheticsMonitor#private_key}

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.fileName">fileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.fileName">fileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.password"></a>

```typescript
public readonly password: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.passwordType">passwordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

##### `passwordType`<sup>Optional</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

##### `vaultSecretId`<sup>Optional</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

### ApmSyntheticsMonitorConfigurationDatabaseWalletDetails <a name="ApmSyntheticsMonitorConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationDatabaseWalletDetails: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.databaseWallet">databaseWallet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}. |

---

##### `databaseWallet`<sup>Optional</sup> <a name="databaseWallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.databaseWallet"></a>

```typescript
public readonly databaseWallet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}.

---

### ApmSyntheticsMonitorConfigurationDnsConfiguration <a name="ApmSyntheticsMonitorConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationDnsConfiguration: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.isOverrideDns">isOverrideDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.overrideDnsIp">overrideDnsIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}. |

---

##### `isOverrideDns`<sup>Optional</sup> <a name="isOverrideDns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.isOverrideDns"></a>

```typescript
public readonly isOverrideDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}.

---

##### `overrideDnsIp`<sup>Optional</sup> <a name="overrideDnsIp" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.overrideDnsIp"></a>

```typescript
public readonly overrideDnsIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}.

---

### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.password"></a>

```typescript
public readonly password: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.passwordType">passwordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

##### `passwordType`<sup>Optional</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

##### `vaultSecretId`<sup>Optional</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

### ApmSyntheticsMonitorConfigurationNetworkConfiguration <a name="ApmSyntheticsMonitorConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationNetworkConfiguration: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.numberOfHops">numberOfHops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probeMode">probeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probePerHop">probePerHop</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.transmissionRate">transmissionRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}. |

---

##### `numberOfHops`<sup>Optional</sup> <a name="numberOfHops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.numberOfHops"></a>

```typescript
public readonly numberOfHops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}.

---

##### `probeMode`<sup>Optional</sup> <a name="probeMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probeMode"></a>

```typescript
public readonly probeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}.

---

##### `probePerHop`<sup>Optional</sup> <a name="probePerHop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probePerHop"></a>

```typescript
public readonly probePerHop: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

##### `transmissionRate`<sup>Optional</sup> <a name="transmissionRate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.transmissionRate"></a>

```typescript
public readonly transmissionRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}.

---

### ApmSyntheticsMonitorConfigurationReqAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationReqAuthenticationDetails: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authHeaders">authHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]</code> | auth_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestMethod">authRequestMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestPostBody">authRequestPostBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authToken">authToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUrl">authUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserName">authUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserPassword">authUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.oauthScheme">oauthScheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}. |

---

##### `authHeaders`<sup>Optional</sup> <a name="authHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authHeaders"></a>

```typescript
public readonly authHeaders: IResolvable | ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]

auth_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_headers ApmSyntheticsMonitor#auth_headers}

---

##### `authRequestMethod`<sup>Optional</sup> <a name="authRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestMethod"></a>

```typescript
public readonly authRequestMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}.

---

##### `authRequestPostBody`<sup>Optional</sup> <a name="authRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestPostBody"></a>

```typescript
public readonly authRequestPostBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}.

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}.

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}.

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}.

---

##### `authUserPassword`<sup>Optional</sup> <a name="authUserPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserPassword"></a>

```typescript
public readonly authUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}.

---

##### `oauthScheme`<sup>Optional</sup> <a name="oauthScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.oauthScheme"></a>

```typescript
public readonly oauthScheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}.

---

### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerValue">headerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}.

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}.

---

### ApmSyntheticsMonitorConfigurationRequestHeaders <a name="ApmSyntheticsMonitorConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationRequestHeaders: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerValue">headerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}.

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}.

---

### ApmSyntheticsMonitorConfigurationRequestQueryParams <a name="ApmSyntheticsMonitorConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationRequestQueryParams: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramName">paramName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramValue">paramValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}. |

---

##### `paramName`<sup>Optional</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}.

---

##### `paramValue`<sup>Optional</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}.

---

### ApmSyntheticsMonitorConfigurationVerifyTexts <a name="ApmSyntheticsMonitorConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorConfigurationVerifyTexts: apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}. |

---

##### `text`<sup>Optional</sup> <a name="text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}.

---

### ApmSyntheticsMonitorMaintenanceWindowSchedule <a name="ApmSyntheticsMonitorMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorMaintenanceWindowSchedule: apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeEnded">timeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeStarted">timeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}. |

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}.

---

### ApmSyntheticsMonitorScriptParameters <a name="ApmSyntheticsMonitorScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorScriptParameters: apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramName">paramName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramValue">paramValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}. |

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}.

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}.

---

### ApmSyntheticsMonitorScriptParametersMonitorScriptParameter <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorScriptParametersMonitorScriptParameter: apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter = { ... }
```


### ApmSyntheticsMonitorTimeouts <a name="ApmSyntheticsMonitorTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorTimeouts: apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}.

---

### ApmSyntheticsMonitorVantagePoints <a name="ApmSyntheticsMonitorVantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

const apmSyntheticsMonitorVantagePoints: apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsMonitorAvailabilityConfigurationOutputReference <a name="ApmSyntheticsMonitorAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMaxAllowedFailuresPerInterval">resetMaxAllowedFailuresPerInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMinAllowedRunsPerInterval">resetMinAllowedRunsPerInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAllowedFailuresPerInterval` <a name="resetMaxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMaxAllowedFailuresPerInterval"></a>

```typescript
public resetMaxAllowedFailuresPerInterval(): void
```

##### `resetMinAllowedRunsPerInterval` <a name="resetMinAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMinAllowedRunsPerInterval"></a>

```typescript
public resetMinAllowedRunsPerInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerIntervalInput">maxAllowedFailuresPerIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerIntervalInput">minAllowedRunsPerIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">maxAllowedFailuresPerInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">minAllowedRunsPerInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAllowedFailuresPerIntervalInput`<sup>Optional</sup> <a name="maxAllowedFailuresPerIntervalInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerIntervalInput"></a>

```typescript
public readonly maxAllowedFailuresPerIntervalInput: number;
```

- *Type:* number

---

##### `minAllowedRunsPerIntervalInput`<sup>Optional</sup> <a name="minAllowedRunsPerIntervalInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerIntervalInput"></a>

```typescript
public readonly minAllowedRunsPerIntervalInput: number;
```

- *Type:* number

---

##### `maxAllowedFailuresPerInterval`<sup>Required</sup> <a name="maxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```typescript
public readonly maxAllowedFailuresPerInterval: number;
```

- *Type:* number

---

##### `minAllowedRunsPerInterval`<sup>Required</sup> <a name="minAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```typescript
public readonly minAllowedRunsPerInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorAvailabilityConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetFileName">resetFileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetFileName"></a>

```typescript
public resetFileName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate">putClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey">putPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientCertificate` <a name="putClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate"></a>

```typescript
public putClientCertificate(value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---

##### `putPrivateKey` <a name="putPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey"></a>

```typescript
public putPrivateKey(value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">clientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey">privateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference</a>

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference</a>

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationClientCertificateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetFileName">resetFileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetFileName"></a>

```typescript
public resetFileName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword">putPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword"></a>

```typescript
public putPassword(value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```typescript
public readonly password: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPasswordType">resetPasswordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetVaultSecretId">resetVaultSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordType` <a name="resetPasswordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPasswordType"></a>

```typescript
public resetPasswordType(): void
```

##### `resetVaultSecretId` <a name="resetVaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetVaultSecretId"></a>

```typescript
public resetVaultSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput">passwordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput">vaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">passwordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordTypeInput`<sup>Optional</sup> <a name="passwordTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput"></a>

```typescript
public readonly passwordTypeInput: string;
```

- *Type:* string

---

##### `vaultSecretIdInput`<sup>Optional</sup> <a name="vaultSecretIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput"></a>

```typescript
public readonly vaultSecretIdInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetDatabaseWallet">resetDatabaseWallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseWallet` <a name="resetDatabaseWallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetDatabaseWallet"></a>

```typescript
public resetDatabaseWallet(): void
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWalletInput">databaseWalletInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">databaseWallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseWalletInput`<sup>Optional</sup> <a name="databaseWalletInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWalletInput"></a>

```typescript
public readonly databaseWalletInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `databaseWallet`<sup>Required</sup> <a name="databaseWallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```typescript
public readonly databaseWallet: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---


### ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetIsOverrideDns">resetIsOverrideDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetOverrideDnsIp">resetOverrideDnsIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOverrideDns` <a name="resetIsOverrideDns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetIsOverrideDns"></a>

```typescript
public resetIsOverrideDns(): void
```

##### `resetOverrideDnsIp` <a name="resetOverrideDnsIp" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetOverrideDnsIp"></a>

```typescript
public resetOverrideDnsIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDnsInput">isOverrideDnsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIpInput">overrideDnsIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns">isOverrideDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">overrideDnsIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOverrideDnsInput`<sup>Optional</sup> <a name="isOverrideDnsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDnsInput"></a>

```typescript
public readonly isOverrideDnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideDnsIpInput`<sup>Optional</sup> <a name="overrideDnsIpInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIpInput"></a>

```typescript
public readonly overrideDnsIpInput: string;
```

- *Type:* string

---

##### `isOverrideDns`<sup>Required</sup> <a name="isOverrideDns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```typescript
public readonly isOverrideDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overrideDnsIp`<sup>Required</sup> <a name="overrideDnsIp" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```typescript
public readonly overrideDnsIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationDnsConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword">putPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword"></a>

```typescript
public putPassword(value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```typescript
public readonly password: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPasswordType">resetPasswordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetVaultSecretId">resetVaultSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordType` <a name="resetPasswordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPasswordType"></a>

```typescript
public resetPasswordType(): void
```

##### `resetVaultSecretId` <a name="resetVaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetVaultSecretId"></a>

```typescript
public resetVaultSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput">passwordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput">vaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">passwordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordTypeInput`<sup>Optional</sup> <a name="passwordTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput"></a>

```typescript
public readonly passwordTypeInput: string;
```

- *Type:* string

---

##### `vaultSecretIdInput`<sup>Optional</sup> <a name="vaultSecretIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput"></a>

```typescript
public readonly vaultSecretIdInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetNumberOfHops">resetNumberOfHops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbeMode">resetProbeMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbePerHop">resetProbePerHop</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetTransmissionRate">resetTransmissionRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfHops` <a name="resetNumberOfHops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetNumberOfHops"></a>

```typescript
public resetNumberOfHops(): void
```

##### `resetProbeMode` <a name="resetProbeMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbeMode"></a>

```typescript
public resetProbeMode(): void
```

##### `resetProbePerHop` <a name="resetProbePerHop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbePerHop"></a>

```typescript
public resetProbePerHop(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTransmissionRate` <a name="resetTransmissionRate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetTransmissionRate"></a>

```typescript
public resetTransmissionRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHopsInput">numberOfHopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeModeInput">probeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHopInput">probePerHopInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRateInput">transmissionRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops">numberOfHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode">probeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop">probePerHop</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate">transmissionRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfHopsInput`<sup>Optional</sup> <a name="numberOfHopsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHopsInput"></a>

```typescript
public readonly numberOfHopsInput: number;
```

- *Type:* number

---

##### `probeModeInput`<sup>Optional</sup> <a name="probeModeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeModeInput"></a>

```typescript
public readonly probeModeInput: string;
```

- *Type:* string

---

##### `probePerHopInput`<sup>Optional</sup> <a name="probePerHopInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHopInput"></a>

```typescript
public readonly probePerHopInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `transmissionRateInput`<sup>Optional</sup> <a name="transmissionRateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRateInput"></a>

```typescript
public readonly transmissionRateInput: number;
```

- *Type:* number

---

##### `numberOfHops`<sup>Required</sup> <a name="numberOfHops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```typescript
public readonly numberOfHops: number;
```

- *Type:* number

---

##### `probeMode`<sup>Required</sup> <a name="probeMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```typescript
public readonly probeMode: string;
```

- *Type:* string

---

##### `probePerHop`<sup>Required</sup> <a name="probePerHop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```typescript
public readonly probePerHop: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `transmissionRate`<sup>Required</sup> <a name="transmissionRate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```typescript
public readonly transmissionRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails">putClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails">putDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails">putDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration">putDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails">putFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails">putReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders">putRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams">putRequestQueryParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts">putVerifyTexts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetClientCertificateDetails">resetClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConfigType">resetConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseAuthenticationDetails">resetDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseConnectionType">resetDatabaseConnectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseWalletDetails">resetDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDnsConfiguration">resetDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDownloadSizeLimitInBytes">resetDownloadSizeLimitInBytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpBasicAuthenticationDetails">resetFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpProtocol">resetFtpProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpRequestType">resetFtpRequestType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsActiveMode">resetIsActiveMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsCertificateValidationEnabled">resetIsCertificateValidationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsDefaultSnapshotEnabled">resetIsDefaultSnapshotEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsFailureRetried">resetIsFailureRetried</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsQueryRecursive">resetIsQueryRecursive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsRedirectionEnabled">resetIsRedirectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNameServer">resetNameServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRecordType">resetRecordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationDetails">resetReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationScheme">resetReqAuthenticationScheme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestMethod">resetRequestMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestPostBody">resetRequestPostBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestQueryParams">resetRequestQueryParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetUploadFileSizeInBytes">resetUploadFileSizeInBytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseCodes">resetVerifyResponseCodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseContent">resetVerifyResponseContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyTexts">resetVerifyTexts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientCertificateDetails` <a name="putClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails"></a>

```typescript
public putClientCertificateDetails(value: ApmSyntheticsMonitorConfigurationClientCertificateDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---

##### `putDatabaseAuthenticationDetails` <a name="putDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails"></a>

```typescript
public putDatabaseAuthenticationDetails(value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---

##### `putDatabaseWalletDetails` <a name="putDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails"></a>

```typescript
public putDatabaseWalletDetails(value: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---

##### `putDnsConfiguration` <a name="putDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration"></a>

```typescript
public putDnsConfiguration(value: ApmSyntheticsMonitorConfigurationDnsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---

##### `putFtpBasicAuthenticationDetails` <a name="putFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails"></a>

```typescript
public putFtpBasicAuthenticationDetails(value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: ApmSyntheticsMonitorConfigurationNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---

##### `putReqAuthenticationDetails` <a name="putReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails"></a>

```typescript
public putReqAuthenticationDetails(value: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---

##### `putRequestHeaders` <a name="putRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders"></a>

```typescript
public putRequestHeaders(value: IResolvable | ApmSyntheticsMonitorConfigurationRequestHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]

---

##### `putRequestQueryParams` <a name="putRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams"></a>

```typescript
public putRequestQueryParams(value: IResolvable | ApmSyntheticsMonitorConfigurationRequestQueryParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]

---

##### `putVerifyTexts` <a name="putVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts"></a>

```typescript
public putVerifyTexts(value: IResolvable | ApmSyntheticsMonitorConfigurationVerifyTexts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]

---

##### `resetClientCertificateDetails` <a name="resetClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetClientCertificateDetails"></a>

```typescript
public resetClientCertificateDetails(): void
```

##### `resetConfigType` <a name="resetConfigType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConfigType"></a>

```typescript
public resetConfigType(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetDatabaseAuthenticationDetails` <a name="resetDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseAuthenticationDetails"></a>

```typescript
public resetDatabaseAuthenticationDetails(): void
```

##### `resetDatabaseConnectionType` <a name="resetDatabaseConnectionType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseConnectionType"></a>

```typescript
public resetDatabaseConnectionType(): void
```

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```

##### `resetDatabaseType` <a name="resetDatabaseType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseType"></a>

```typescript
public resetDatabaseType(): void
```

##### `resetDatabaseWalletDetails` <a name="resetDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseWalletDetails"></a>

```typescript
public resetDatabaseWalletDetails(): void
```

##### `resetDnsConfiguration` <a name="resetDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDnsConfiguration"></a>

```typescript
public resetDnsConfiguration(): void
```

##### `resetDownloadSizeLimitInBytes` <a name="resetDownloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDownloadSizeLimitInBytes"></a>

```typescript
public resetDownloadSizeLimitInBytes(): void
```

##### `resetFtpBasicAuthenticationDetails` <a name="resetFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpBasicAuthenticationDetails"></a>

```typescript
public resetFtpBasicAuthenticationDetails(): void
```

##### `resetFtpProtocol` <a name="resetFtpProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpProtocol"></a>

```typescript
public resetFtpProtocol(): void
```

##### `resetFtpRequestType` <a name="resetFtpRequestType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpRequestType"></a>

```typescript
public resetFtpRequestType(): void
```

##### `resetIsActiveMode` <a name="resetIsActiveMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsActiveMode"></a>

```typescript
public resetIsActiveMode(): void
```

##### `resetIsCertificateValidationEnabled` <a name="resetIsCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsCertificateValidationEnabled"></a>

```typescript
public resetIsCertificateValidationEnabled(): void
```

##### `resetIsDefaultSnapshotEnabled` <a name="resetIsDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsDefaultSnapshotEnabled"></a>

```typescript
public resetIsDefaultSnapshotEnabled(): void
```

##### `resetIsFailureRetried` <a name="resetIsFailureRetried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsFailureRetried"></a>

```typescript
public resetIsFailureRetried(): void
```

##### `resetIsQueryRecursive` <a name="resetIsQueryRecursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsQueryRecursive"></a>

```typescript
public resetIsQueryRecursive(): void
```

##### `resetIsRedirectionEnabled` <a name="resetIsRedirectionEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsRedirectionEnabled"></a>

```typescript
public resetIsRedirectionEnabled(): void
```

##### `resetNameServer` <a name="resetNameServer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNameServer"></a>

```typescript
public resetNameServer(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetRecordType` <a name="resetRecordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRecordType"></a>

```typescript
public resetRecordType(): void
```

##### `resetReqAuthenticationDetails` <a name="resetReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationDetails"></a>

```typescript
public resetReqAuthenticationDetails(): void
```

##### `resetReqAuthenticationScheme` <a name="resetReqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationScheme"></a>

```typescript
public resetReqAuthenticationScheme(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetRequestMethod` <a name="resetRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestMethod"></a>

```typescript
public resetRequestMethod(): void
```

##### `resetRequestPostBody` <a name="resetRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestPostBody"></a>

```typescript
public resetRequestPostBody(): void
```

##### `resetRequestQueryParams` <a name="resetRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestQueryParams"></a>

```typescript
public resetRequestQueryParams(): void
```

##### `resetUploadFileSizeInBytes` <a name="resetUploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetUploadFileSizeInBytes"></a>

```typescript
public resetUploadFileSizeInBytes(): void
```

##### `resetVerifyResponseCodes` <a name="resetVerifyResponseCodes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseCodes"></a>

```typescript
public resetVerifyResponseCodes(): void
```

##### `resetVerifyResponseContent` <a name="resetVerifyResponseContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseContent"></a>

```typescript
public resetVerifyResponseContent(): void
```

##### `resetVerifyTexts` <a name="resetVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyTexts"></a>

```typescript
public resetVerifyTexts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails">clientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails">databaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails">databaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration">dnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference">ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails">ftpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference">ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails">reqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList">ApmSyntheticsMonitorConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams">requestQueryParams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList">ApmSyntheticsMonitorConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts">verifyTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList">ApmSyntheticsMonitorConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetailsInput">clientCertificateDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configTypeInput">configTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetailsInput">databaseAuthenticationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionTypeInput">databaseConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetailsInput">databaseWalletDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfigurationInput">dnsConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytesInput">downloadSizeLimitInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetailsInput">ftpBasicAuthenticationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocolInput">ftpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestTypeInput">ftpRequestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveModeInput">isActiveModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabledInput">isCertificateValidationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabledInput">isDefaultSnapshotEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetriedInput">isFailureRetriedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursiveInput">isQueryRecursiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabledInput">isRedirectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServerInput">nameServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordTypeInput">recordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetailsInput">reqAuthenticationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationSchemeInput">reqAuthenticationSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBodyInput">requestPostBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParamsInput">requestQueryParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytesInput">uploadFileSizeInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodesInput">verifyResponseCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContentInput">verifyResponseContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTextsInput">verifyTextsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType">databaseConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes">downloadSizeLimitInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol">ftpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType">ftpRequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode">isActiveMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled">isCertificateValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled">isDefaultSnapshotEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried">isFailureRetried</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive">isQueryRecursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled">isRedirectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServer">nameServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordType">recordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme">reqAuthenticationScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody">requestPostBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes">uploadFileSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes">verifyResponseCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent">verifyResponseContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificateDetails`<sup>Required</sup> <a name="clientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails"></a>

```typescript
public readonly clientCertificateDetails: ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference</a>

---

##### `databaseAuthenticationDetails`<sup>Required</sup> <a name="databaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```typescript
public readonly databaseAuthenticationDetails: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference</a>

---

##### `databaseWalletDetails`<sup>Required</sup> <a name="databaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails"></a>

```typescript
public readonly databaseWalletDetails: ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference</a>

---

##### `dnsConfiguration`<sup>Required</sup> <a name="dnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration"></a>

```typescript
public readonly dnsConfiguration: ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference">ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference</a>

---

##### `ftpBasicAuthenticationDetails`<sup>Required</sup> <a name="ftpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```typescript
public readonly ftpBasicAuthenticationDetails: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference">ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference</a>

---

##### `reqAuthenticationDetails`<sup>Required</sup> <a name="reqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```typescript
public readonly reqAuthenticationDetails: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference</a>

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: ApmSyntheticsMonitorConfigurationRequestHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList">ApmSyntheticsMonitorConfigurationRequestHeadersList</a>

---

##### `requestQueryParams`<sup>Required</sup> <a name="requestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams"></a>

```typescript
public readonly requestQueryParams: ApmSyntheticsMonitorConfigurationRequestQueryParamsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList">ApmSyntheticsMonitorConfigurationRequestQueryParamsList</a>

---

##### `verifyTexts`<sup>Required</sup> <a name="verifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts"></a>

```typescript
public readonly verifyTexts: ApmSyntheticsMonitorConfigurationVerifyTextsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList">ApmSyntheticsMonitorConfigurationVerifyTextsList</a>

---

##### `clientCertificateDetailsInput`<sup>Optional</sup> <a name="clientCertificateDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetailsInput"></a>

```typescript
public readonly clientCertificateDetailsInput: ApmSyntheticsMonitorConfigurationClientCertificateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configTypeInput"></a>

```typescript
public readonly configTypeInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `databaseAuthenticationDetailsInput`<sup>Optional</sup> <a name="databaseAuthenticationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetailsInput"></a>

```typescript
public readonly databaseAuthenticationDetailsInput: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---

##### `databaseConnectionTypeInput`<sup>Optional</sup> <a name="databaseConnectionTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionTypeInput"></a>

```typescript
public readonly databaseConnectionTypeInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string;
```

- *Type:* string

---

##### `databaseWalletDetailsInput`<sup>Optional</sup> <a name="databaseWalletDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetailsInput"></a>

```typescript
public readonly databaseWalletDetailsInput: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---

##### `dnsConfigurationInput`<sup>Optional</sup> <a name="dnsConfigurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfigurationInput"></a>

```typescript
public readonly dnsConfigurationInput: ApmSyntheticsMonitorConfigurationDnsConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---

##### `downloadSizeLimitInBytesInput`<sup>Optional</sup> <a name="downloadSizeLimitInBytesInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytesInput"></a>

```typescript
public readonly downloadSizeLimitInBytesInput: number;
```

- *Type:* number

---

##### `ftpBasicAuthenticationDetailsInput`<sup>Optional</sup> <a name="ftpBasicAuthenticationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetailsInput"></a>

```typescript
public readonly ftpBasicAuthenticationDetailsInput: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---

##### `ftpProtocolInput`<sup>Optional</sup> <a name="ftpProtocolInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocolInput"></a>

```typescript
public readonly ftpProtocolInput: string;
```

- *Type:* string

---

##### `ftpRequestTypeInput`<sup>Optional</sup> <a name="ftpRequestTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestTypeInput"></a>

```typescript
public readonly ftpRequestTypeInput: string;
```

- *Type:* string

---

##### `isActiveModeInput`<sup>Optional</sup> <a name="isActiveModeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveModeInput"></a>

```typescript
public readonly isActiveModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCertificateValidationEnabledInput`<sup>Optional</sup> <a name="isCertificateValidationEnabledInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabledInput"></a>

```typescript
public readonly isCertificateValidationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDefaultSnapshotEnabledInput`<sup>Optional</sup> <a name="isDefaultSnapshotEnabledInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabledInput"></a>

```typescript
public readonly isDefaultSnapshotEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFailureRetriedInput`<sup>Optional</sup> <a name="isFailureRetriedInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetriedInput"></a>

```typescript
public readonly isFailureRetriedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isQueryRecursiveInput`<sup>Optional</sup> <a name="isQueryRecursiveInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursiveInput"></a>

```typescript
public readonly isQueryRecursiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRedirectionEnabledInput`<sup>Optional</sup> <a name="isRedirectionEnabledInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabledInput"></a>

```typescript
public readonly isRedirectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameServerInput`<sup>Optional</sup> <a name="nameServerInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServerInput"></a>

```typescript
public readonly nameServerInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: ApmSyntheticsMonitorConfigurationNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `recordTypeInput`<sup>Optional</sup> <a name="recordTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordTypeInput"></a>

```typescript
public readonly recordTypeInput: string;
```

- *Type:* string

---

##### `reqAuthenticationDetailsInput`<sup>Optional</sup> <a name="reqAuthenticationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetailsInput"></a>

```typescript
public readonly reqAuthenticationDetailsInput: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---

##### `reqAuthenticationSchemeInput`<sup>Optional</sup> <a name="reqAuthenticationSchemeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationSchemeInput"></a>

```typescript
public readonly reqAuthenticationSchemeInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: IResolvable | ApmSyntheticsMonitorConfigurationRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethodInput"></a>

```typescript
public readonly requestMethodInput: string;
```

- *Type:* string

---

##### `requestPostBodyInput`<sup>Optional</sup> <a name="requestPostBodyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBodyInput"></a>

```typescript
public readonly requestPostBodyInput: string;
```

- *Type:* string

---

##### `requestQueryParamsInput`<sup>Optional</sup> <a name="requestQueryParamsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParamsInput"></a>

```typescript
public readonly requestQueryParamsInput: IResolvable | ApmSyntheticsMonitorConfigurationRequestQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]

---

##### `uploadFileSizeInBytesInput`<sup>Optional</sup> <a name="uploadFileSizeInBytesInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytesInput"></a>

```typescript
public readonly uploadFileSizeInBytesInput: number;
```

- *Type:* number

---

##### `verifyResponseCodesInput`<sup>Optional</sup> <a name="verifyResponseCodesInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodesInput"></a>

```typescript
public readonly verifyResponseCodesInput: string[];
```

- *Type:* string[]

---

##### `verifyResponseContentInput`<sup>Optional</sup> <a name="verifyResponseContentInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContentInput"></a>

```typescript
public readonly verifyResponseContentInput: string;
```

- *Type:* string

---

##### `verifyTextsInput`<sup>Optional</sup> <a name="verifyTextsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTextsInput"></a>

```typescript
public readonly verifyTextsInput: IResolvable | ApmSyntheticsMonitorConfigurationVerifyTexts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `databaseConnectionType`<sup>Required</sup> <a name="databaseConnectionType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType"></a>

```typescript
public readonly databaseConnectionType: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `downloadSizeLimitInBytes`<sup>Required</sup> <a name="downloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```typescript
public readonly downloadSizeLimitInBytes: number;
```

- *Type:* number

---

##### `ftpProtocol`<sup>Required</sup> <a name="ftpProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol"></a>

```typescript
public readonly ftpProtocol: string;
```

- *Type:* string

---

##### `ftpRequestType`<sup>Required</sup> <a name="ftpRequestType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType"></a>

```typescript
public readonly ftpRequestType: string;
```

- *Type:* string

---

##### `isActiveMode`<sup>Required</sup> <a name="isActiveMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode"></a>

```typescript
public readonly isActiveMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCertificateValidationEnabled`<sup>Required</sup> <a name="isCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```typescript
public readonly isCertificateValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDefaultSnapshotEnabled`<sup>Required</sup> <a name="isDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```typescript
public readonly isDefaultSnapshotEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFailureRetried`<sup>Required</sup> <a name="isFailureRetried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried"></a>

```typescript
public readonly isFailureRetried: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isQueryRecursive`<sup>Required</sup> <a name="isQueryRecursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive"></a>

```typescript
public readonly isQueryRecursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRedirectionEnabled`<sup>Required</sup> <a name="isRedirectionEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled"></a>

```typescript
public readonly isRedirectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServer"></a>

```typescript
public readonly nameServer: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `recordType`<sup>Required</sup> <a name="recordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordType"></a>

```typescript
public readonly recordType: string;
```

- *Type:* string

---

##### `reqAuthenticationScheme`<sup>Required</sup> <a name="reqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```typescript
public readonly reqAuthenticationScheme: string;
```

- *Type:* string

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `requestPostBody`<sup>Required</sup> <a name="requestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody"></a>

```typescript
public readonly requestPostBody: string;
```

- *Type:* string

---

##### `uploadFileSizeInBytes`<sup>Required</sup> <a name="uploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```typescript
public readonly uploadFileSizeInBytes: number;
```

- *Type:* number

---

##### `verifyResponseCodes`<sup>Required</sup> <a name="verifyResponseCodes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes"></a>

```typescript
public readonly verifyResponseCodes: string[];
```

- *Type:* string[]

---

##### `verifyResponseContent`<sup>Required</sup> <a name="verifyResponseContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent"></a>

```typescript
public readonly verifyResponseContent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```

##### `resetHeaderValue` <a name="resetHeaderValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderValue"></a>

```typescript
public resetHeaderValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders">putAuthHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthHeaders">resetAuthHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestMethod">resetAuthRequestMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestPostBody">resetAuthRequestPostBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserPassword">resetAuthUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetOauthScheme">resetOauthScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthHeaders` <a name="putAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders"></a>

```typescript
public putAuthHeaders(value: IResolvable | ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]

---

##### `resetAuthHeaders` <a name="resetAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthHeaders"></a>

```typescript
public resetAuthHeaders(): void
```

##### `resetAuthRequestMethod` <a name="resetAuthRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestMethod"></a>

```typescript
public resetAuthRequestMethod(): void
```

##### `resetAuthRequestPostBody` <a name="resetAuthRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestPostBody"></a>

```typescript
public resetAuthRequestPostBody(): void
```

##### `resetAuthToken` <a name="resetAuthToken" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUrl"></a>

```typescript
public resetAuthUrl(): void
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserName"></a>

```typescript
public resetAuthUserName(): void
```

##### `resetAuthUserPassword` <a name="resetAuthUserPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserPassword"></a>

```typescript
public resetAuthUserPassword(): void
```

##### `resetOauthScheme` <a name="resetOauthScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetOauthScheme"></a>

```typescript
public resetOauthScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">authHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeadersInput">authHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethodInput">authRequestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBodyInput">authRequestPostBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authTokenInput">authTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPasswordInput">authUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthSchemeInput">oauthSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">authRequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">authRequestPostBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">authUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">authUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">oauthScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authHeaders`<sup>Required</sup> <a name="authHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```typescript
public readonly authHeaders: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `authHeadersInput`<sup>Optional</sup> <a name="authHeadersInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeadersInput"></a>

```typescript
public readonly authHeadersInput: IResolvable | ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>[]

---

##### `authRequestMethodInput`<sup>Optional</sup> <a name="authRequestMethodInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethodInput"></a>

```typescript
public readonly authRequestMethodInput: string;
```

- *Type:* string

---

##### `authRequestPostBodyInput`<sup>Optional</sup> <a name="authRequestPostBodyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBodyInput"></a>

```typescript
public readonly authRequestPostBodyInput: string;
```

- *Type:* string

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: string;
```

- *Type:* string

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrlInput"></a>

```typescript
public readonly authUrlInput: string;
```

- *Type:* string

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserNameInput"></a>

```typescript
public readonly authUserNameInput: string;
```

- *Type:* string

---

##### `authUserPasswordInput`<sup>Optional</sup> <a name="authUserPasswordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPasswordInput"></a>

```typescript
public readonly authUserPasswordInput: string;
```

- *Type:* string

---

##### `oauthSchemeInput`<sup>Optional</sup> <a name="oauthSchemeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthSchemeInput"></a>

```typescript
public readonly oauthSchemeInput: string;
```

- *Type:* string

---

##### `authRequestMethod`<sup>Required</sup> <a name="authRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```typescript
public readonly authRequestMethod: string;
```

- *Type:* string

---

##### `authRequestPostBody`<sup>Required</sup> <a name="authRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```typescript
public readonly authRequestPostBody: string;
```

- *Type:* string

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

---

##### `authUserPassword`<sup>Required</sup> <a name="authUserPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```typescript
public readonly authUserPassword: string;
```

- *Type:* string

---

##### `oauthScheme`<sup>Required</sup> <a name="oauthScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```typescript
public readonly oauthScheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationRequestHeadersList <a name="ApmSyntheticsMonitorConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationRequestHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>[]

---


### ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference <a name="ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```

##### `resetHeaderValue` <a name="resetHeaderValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderValue"></a>

```typescript
public resetHeaderValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationRequestHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>

---


### ApmSyntheticsMonitorConfigurationRequestQueryParamsList <a name="ApmSyntheticsMonitorConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationRequestQueryParams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>[]

---


### ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference <a name="ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamName">resetParamName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamValue">resetParamValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParamName` <a name="resetParamName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamName"></a>

```typescript
public resetParamName(): void
```

##### `resetParamValue` <a name="resetParamValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamValue"></a>

```typescript
public resetParamValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValueInput">paramValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramNameInput"></a>

```typescript
public readonly paramNameInput: string;
```

- *Type:* string

---

##### `paramValueInput`<sup>Optional</sup> <a name="paramValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValueInput"></a>

```typescript
public readonly paramValueInput: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationRequestQueryParams;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>

---


### ApmSyntheticsMonitorConfigurationVerifyTextsList <a name="ApmSyntheticsMonitorConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationVerifyTexts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>[]

---


### ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference <a name="ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorConfigurationVerifyTexts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>

---


### ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference <a name="ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeEnded"></a>

```typescript
public resetTimeEnded(): void
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeStarted"></a>

```typescript
public resetTimeStarted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEndedInput">timeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStartedInput">timeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEndedInput"></a>

```typescript
public readonly timeEndedInput: string;
```

- *Type:* string

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStartedInput"></a>

```typescript
public readonly timeStartedInput: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---


### ApmSyntheticsMonitorScriptParametersList <a name="ApmSyntheticsMonitorScriptParametersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorScriptParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>[]

---


### ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter">ApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApmSyntheticsMonitorScriptParametersMonitorScriptParameter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter">ApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a>

---


### ApmSyntheticsMonitorScriptParametersOutputReference <a name="ApmSyntheticsMonitorScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten">isOverwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret">isSecret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter">monitorScriptParameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValueInput">paramValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOverwritten`<sup>Required</sup> <a name="isOverwritten" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten"></a>

```typescript
public readonly isOverwritten: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret"></a>

```typescript
public readonly isSecret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `monitorScriptParameter`<sup>Required</sup> <a name="monitorScriptParameter" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter"></a>

```typescript
public readonly monitorScriptParameter: ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a>

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramNameInput"></a>

```typescript
public readonly paramNameInput: string;
```

- *Type:* string

---

##### `paramValueInput`<sup>Optional</sup> <a name="paramValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValueInput"></a>

```typescript
public readonly paramValueInput: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorScriptParameters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>

---


### ApmSyntheticsMonitorTimeoutsOutputReference <a name="ApmSyntheticsMonitorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

---


### ApmSyntheticsMonitorVantagePointsList <a name="ApmSyntheticsMonitorVantagePointsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get"></a>

```typescript
public get(index: number): ApmSyntheticsMonitorVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorVantagePoints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>[]

---


### ApmSyntheticsMonitorVantagePointsOutputReference <a name="ApmSyntheticsMonitorVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer"></a>

```typescript
import { apmSyntheticsMonitor } from 'rhizo-co-terraform-provider-oci'

new apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.workerList">workerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workerList`<sup>Required</sup> <a name="workerList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.workerList"></a>

```typescript
public readonly workerList: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApmSyntheticsMonitorVantagePoints;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>

---



