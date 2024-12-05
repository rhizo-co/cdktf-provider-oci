# `fleetAppsManagementMaintenanceWindow` Submodule <a name="`fleetAppsManagementMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementMaintenanceWindow <a name="FleetAppsManagementMaintenanceWindow" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow(scope: Construct, id: string, config: FleetAppsManagementMaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig">FleetAppsManagementMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig">FleetAppsManagementMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage">resetIsOutage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring">resetIsRecurring</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType">resetMaintenanceWindowType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences">resetRecurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff">resetTaskInitiationCutoff</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart">resetTimeScheduleStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts"></a>

```typescript
public putTimeouts(value: FleetAppsManagementMaintenanceWindowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOutage` <a name="resetIsOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage"></a>

```typescript
public resetIsOutage(): void
```

##### `resetIsRecurring` <a name="resetIsRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring"></a>

```typescript
public resetIsRecurring(): void
```

##### `resetMaintenanceWindowType` <a name="resetMaintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType"></a>

```typescript
public resetMaintenanceWindowType(): void
```

##### `resetRecurrences` <a name="resetRecurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences"></a>

```typescript
public resetRecurrences(): void
```

##### `resetTaskInitiationCutoff` <a name="resetTaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff"></a>

```typescript
public resetTaskInitiationCutoff(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeScheduleStart` <a name="resetTimeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart"></a>

```typescript
public resetTimeScheduleStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetAppsManagementMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetAppsManagementMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput">isOutageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput">isRecurringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput">maintenanceWindowTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput">recurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput">taskInitiationCutoffInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput">timeScheduleStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage">isOutage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring">isRecurring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType">maintenanceWindowType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences">recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff">taskInitiationCutoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart">timeScheduleStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts"></a>

```typescript
public readonly timeouts: FleetAppsManagementMaintenanceWindowTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOutageInput`<sup>Optional</sup> <a name="isOutageInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput"></a>

```typescript
public readonly isOutageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRecurringInput`<sup>Optional</sup> <a name="isRecurringInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput"></a>

```typescript
public readonly isRecurringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceWindowTypeInput`<sup>Optional</sup> <a name="maintenanceWindowTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput"></a>

```typescript
public readonly maintenanceWindowTypeInput: string;
```

- *Type:* string

---

##### `recurrencesInput`<sup>Optional</sup> <a name="recurrencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput"></a>

```typescript
public readonly recurrencesInput: string;
```

- *Type:* string

---

##### `taskInitiationCutoffInput`<sup>Optional</sup> <a name="taskInitiationCutoffInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput"></a>

```typescript
public readonly taskInitiationCutoffInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FleetAppsManagementMaintenanceWindowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---

##### `timeScheduleStartInput`<sup>Optional</sup> <a name="timeScheduleStartInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput"></a>

```typescript
public readonly timeScheduleStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOutage`<sup>Required</sup> <a name="isOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage"></a>

```typescript
public readonly isOutage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRecurring`<sup>Required</sup> <a name="isRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring"></a>

```typescript
public readonly isRecurring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceWindowType`<sup>Required</sup> <a name="maintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType"></a>

```typescript
public readonly maintenanceWindowType: string;
```

- *Type:* string

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences"></a>

```typescript
public readonly recurrences: string;
```

- *Type:* string

---

##### `taskInitiationCutoff`<sup>Required</sup> <a name="taskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff"></a>

```typescript
public readonly taskInitiationCutoff: number;
```

- *Type:* number

---

##### `timeScheduleStart`<sup>Required</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart"></a>

```typescript
public readonly timeScheduleStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementMaintenanceWindowConfig <a name="FleetAppsManagementMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.Initializer"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementMaintenanceWindowConfig: fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage">isOutage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring">isRecurring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType">maintenanceWindowType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences">recurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff">taskInitiationCutoff</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart">timeScheduleStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOutage`<sup>Optional</sup> <a name="isOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage"></a>

```typescript
public readonly isOutage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}.

---

##### `isRecurring`<sup>Optional</sup> <a name="isRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring"></a>

```typescript
public readonly isRecurring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}.

---

##### `maintenanceWindowType`<sup>Optional</sup> <a name="maintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType"></a>

```typescript
public readonly maintenanceWindowType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences"></a>

```typescript
public readonly recurrences: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}.

---

##### `taskInitiationCutoff`<sup>Optional</sup> <a name="taskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff"></a>

```typescript
public readonly taskInitiationCutoff: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FleetAppsManagementMaintenanceWindowTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}

---

##### `timeScheduleStart`<sup>Optional</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart"></a>

```typescript
public readonly timeScheduleStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}.

---

### FleetAppsManagementMaintenanceWindowTimeouts <a name="FleetAppsManagementMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.Initializer"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementMaintenanceWindowTimeouts: fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementMaintenanceWindowTimeoutsOutputReference <a name="FleetAppsManagementMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetAppsManagementMaintenanceWindowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---



