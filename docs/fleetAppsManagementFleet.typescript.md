# `fleetAppsManagementFleet` Submodule <a name="`fleetAppsManagementFleet` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleet <a name="FleetAppsManagementFleet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleet(scope: Construct, id: string, config: FleetAppsManagementFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig">FleetAppsManagementFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig">FleetAppsManagementFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences">putNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria">putRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetGroupType">resetGroupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetIsTargetAutoConfirm">resetIsTargetAutoConfirm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetNotificationPreferences">resetNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetProducts">resetProducts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetResourceSelectionType">resetResourceSelectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetRuleSelectionCriteria">resetRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationPreferences` <a name="putNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences"></a>

```typescript
public putNotificationPreferences(value: FleetAppsManagementFleetNotificationPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---

##### `putRuleSelectionCriteria` <a name="putRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria"></a>

```typescript
public putRuleSelectionCriteria(value: FleetAppsManagementFleetRuleSelectionCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts"></a>

```typescript
public putTimeouts(value: FleetAppsManagementFleetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---

##### `resetApplicationType` <a name="resetApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetApplicationType"></a>

```typescript
public resetApplicationType(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetEnvironmentType"></a>

```typescript
public resetEnvironmentType(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetGroupType` <a name="resetGroupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetGroupType"></a>

```typescript
public resetGroupType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTargetAutoConfirm` <a name="resetIsTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetIsTargetAutoConfirm"></a>

```typescript
public resetIsTargetAutoConfirm(): void
```

##### `resetNotificationPreferences` <a name="resetNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetNotificationPreferences"></a>

```typescript
public resetNotificationPreferences(): void
```

##### `resetProducts` <a name="resetProducts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetProducts"></a>

```typescript
public resetProducts(): void
```

##### `resetResourceSelectionType` <a name="resetResourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetResourceSelectionType"></a>

```typescript
public resetResourceSelectionType(): void
```

##### `resetRuleSelectionCriteria` <a name="resetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetRuleSelectionCriteria"></a>

```typescript
public resetRuleSelectionCriteria(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetAppsManagementFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetAppsManagementFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferences">notificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteria">ruleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference">FleetAppsManagementFleetRuleSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference">FleetAppsManagementFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentTypeInput">environmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetTypeInput">fleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupTypeInput">groupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirmInput">isTargetAutoConfirmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferencesInput">notificationPreferencesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.productsInput">productsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionTypeInput">resourceSelectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteriaInput">ruleSelectionCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupType">groupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirm">isTargetAutoConfirm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionType">resourceSelectionType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `notificationPreferences`<sup>Required</sup> <a name="notificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferences"></a>

```typescript
public readonly notificationPreferences: FleetAppsManagementFleetNotificationPreferencesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesOutputReference</a>

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `ruleSelectionCriteria`<sup>Required</sup> <a name="ruleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteria"></a>

```typescript
public readonly ruleSelectionCriteria: FleetAppsManagementFleetRuleSelectionCriteriaOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference">FleetAppsManagementFleetRuleSelectionCriteriaOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeouts"></a>

```typescript
public readonly timeouts: FleetAppsManagementFleetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference">FleetAppsManagementFleetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentTypeInput"></a>

```typescript
public readonly environmentTypeInput: string;
```

- *Type:* string

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetTypeInput"></a>

```typescript
public readonly fleetTypeInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupTypeInput`<sup>Optional</sup> <a name="groupTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupTypeInput"></a>

```typescript
public readonly groupTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isTargetAutoConfirmInput`<sup>Optional</sup> <a name="isTargetAutoConfirmInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirmInput"></a>

```typescript
public readonly isTargetAutoConfirmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationPreferencesInput`<sup>Optional</sup> <a name="notificationPreferencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferencesInput"></a>

```typescript
public readonly notificationPreferencesInput: FleetAppsManagementFleetNotificationPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.productsInput"></a>

```typescript
public readonly productsInput: string[];
```

- *Type:* string[]

---

##### `resourceSelectionTypeInput`<sup>Optional</sup> <a name="resourceSelectionTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionTypeInput"></a>

```typescript
public readonly resourceSelectionTypeInput: string;
```

- *Type:* string

---

##### `ruleSelectionCriteriaInput`<sup>Optional</sup> <a name="ruleSelectionCriteriaInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteriaInput"></a>

```typescript
public readonly ruleSelectionCriteriaInput: FleetAppsManagementFleetRuleSelectionCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FleetAppsManagementFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTargetAutoConfirm`<sup>Required</sup> <a name="isTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirm"></a>

```typescript
public readonly isTargetAutoConfirm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `resourceSelectionType`<sup>Required</sup> <a name="resourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionType"></a>

```typescript
public readonly resourceSelectionType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetConfig <a name="FleetAppsManagementFleetConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetConfig: fleetAppsManagementFleet.FleetAppsManagementFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.fleetType">fleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.applicationType">applicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.environmentType">environmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.groupType">groupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.isTargetAutoConfirm">isTargetAutoConfirm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.notificationPreferences">notificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | notification_preferences block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.products">products</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.resourceSelectionType">resourceSelectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.ruleSelectionCriteria">ruleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | rule_selection_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}.

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTargetAutoConfirm`<sup>Optional</sup> <a name="isTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.isTargetAutoConfirm"></a>

```typescript
public readonly isTargetAutoConfirm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}.

---

##### `notificationPreferences`<sup>Optional</sup> <a name="notificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.notificationPreferences"></a>

```typescript
public readonly notificationPreferences: FleetAppsManagementFleetNotificationPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

notification_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#notification_preferences FleetAppsManagementFleet#notification_preferences}

---

##### `products`<sup>Optional</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}.

---

##### `resourceSelectionType`<sup>Optional</sup> <a name="resourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.resourceSelectionType"></a>

```typescript
public readonly resourceSelectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}.

---

##### `ruleSelectionCriteria`<sup>Optional</sup> <a name="ruleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.ruleSelectionCriteria"></a>

```typescript
public readonly ruleSelectionCriteria: FleetAppsManagementFleetRuleSelectionCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

rule_selection_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rule_selection_criteria FleetAppsManagementFleet#rule_selection_criteria}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FleetAppsManagementFleetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#timeouts FleetAppsManagementFleet#timeouts}

---

### FleetAppsManagementFleetNotificationPreferences <a name="FleetAppsManagementFleetNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetNotificationPreferences: fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.preferences">preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | preferences block. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}.

---

##### `preferences`<sup>Optional</sup> <a name="preferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.preferences"></a>

```typescript
public readonly preferences: FleetAppsManagementFleetNotificationPreferencesPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#preferences FleetAppsManagementFleet#preferences}

---

### FleetAppsManagementFleetNotificationPreferencesPreferences <a name="FleetAppsManagementFleetNotificationPreferencesPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetNotificationPreferencesPreferences: fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onJobFailure">onJobFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onTopologyModification">onTopologyModification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onUpcomingSchedule">onUpcomingSchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}. |

---

##### `onJobFailure`<sup>Optional</sup> <a name="onJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onJobFailure"></a>

```typescript
public readonly onJobFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}.

---

##### `onTopologyModification`<sup>Optional</sup> <a name="onTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onTopologyModification"></a>

```typescript
public readonly onTopologyModification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}.

---

##### `onUpcomingSchedule`<sup>Optional</sup> <a name="onUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onUpcomingSchedule"></a>

```typescript
public readonly onUpcomingSchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}.

---

### FleetAppsManagementFleetRuleSelectionCriteria <a name="FleetAppsManagementFleetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetRuleSelectionCriteria: fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.matchCondition">matchCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]</code> | rules block. |

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.matchCondition"></a>

```typescript
public readonly matchCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.rules"></a>

```typescript
public readonly rules: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rules FleetAppsManagementFleet#rules}

---

### FleetAppsManagementFleetRuleSelectionCriteriaRules <a name="FleetAppsManagementFleetRuleSelectionCriteriaRules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetRuleSelectionCriteriaRules: fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.basis">basis</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#conditions FleetAppsManagementFleet#conditions}

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}.

---

##### `basis`<sup>Optional</sup> <a name="basis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.basis"></a>

```typescript
public readonly basis: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}.

---

### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetRuleSelectionCriteriaRulesConditions: fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrGroup">attrGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrKey">attrKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrValue">attrValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}. |

---

##### `attrGroup`<sup>Required</sup> <a name="attrGroup" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrGroup"></a>

```typescript
public readonly attrGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}.

---

##### `attrKey`<sup>Required</sup> <a name="attrKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrKey"></a>

```typescript
public readonly attrKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}.

---

##### `attrValue`<sup>Required</sup> <a name="attrValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrValue"></a>

```typescript
public readonly attrValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}.

---

### FleetAppsManagementFleetTimeouts <a name="FleetAppsManagementFleetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

const fleetAppsManagementFleetTimeouts: fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetNotificationPreferencesOutputReference <a name="FleetAppsManagementFleetNotificationPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences">putPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resetPreferences">resetPreferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferences` <a name="putPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences"></a>

```typescript
public putPreferences(value: FleetAppsManagementFleetNotificationPreferencesPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---

##### `resetPreferences` <a name="resetPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resetPreferences"></a>

```typescript
public resetPreferences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences">preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferencesInput">preferencesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferences`<sup>Required</sup> <a name="preferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences"></a>

```typescript
public readonly preferences: FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `preferencesInput`<sup>Optional</sup> <a name="preferencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferencesInput"></a>

```typescript
public readonly preferencesInput: FleetAppsManagementFleetNotificationPreferencesPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FleetAppsManagementFleetNotificationPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---


### FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference <a name="FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnJobFailure">resetOnJobFailure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnTopologyModification">resetOnTopologyModification</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnUpcomingSchedule">resetOnUpcomingSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnJobFailure` <a name="resetOnJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnJobFailure"></a>

```typescript
public resetOnJobFailure(): void
```

##### `resetOnTopologyModification` <a name="resetOnTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnTopologyModification"></a>

```typescript
public resetOnTopologyModification(): void
```

##### `resetOnUpcomingSchedule` <a name="resetOnUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnUpcomingSchedule"></a>

```typescript
public resetOnUpcomingSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailureInput">onJobFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModificationInput">onTopologyModificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingScheduleInput">onUpcomingScheduleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure">onJobFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification">onTopologyModification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule">onUpcomingSchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onJobFailureInput`<sup>Optional</sup> <a name="onJobFailureInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailureInput"></a>

```typescript
public readonly onJobFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onTopologyModificationInput`<sup>Optional</sup> <a name="onTopologyModificationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModificationInput"></a>

```typescript
public readonly onTopologyModificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onUpcomingScheduleInput`<sup>Optional</sup> <a name="onUpcomingScheduleInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingScheduleInput"></a>

```typescript
public readonly onUpcomingScheduleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onJobFailure`<sup>Required</sup> <a name="onJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure"></a>

```typescript
public readonly onJobFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onTopologyModification`<sup>Required</sup> <a name="onTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification"></a>

```typescript
public readonly onTopologyModification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onUpcomingSchedule`<sup>Required</sup> <a name="onUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule"></a>

```typescript
public readonly onUpcomingSchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FleetAppsManagementFleetNotificationPreferencesPreferences;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList">FleetAppsManagementFleetRuleSelectionCriteriaRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition">matchCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules"></a>

```typescript
public readonly rules: FleetAppsManagementFleetRuleSelectionCriteriaRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList">FleetAppsManagementFleetRuleSelectionCriteriaRulesList</a>

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FleetAppsManagementFleetRuleSelectionCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get"></a>

```typescript
public get(index: number): FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroupInput">attrGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKeyInput">attrKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValueInput">attrValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup">attrGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey">attrKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue">attrValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attrGroupInput`<sup>Optional</sup> <a name="attrGroupInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroupInput"></a>

```typescript
public readonly attrGroupInput: string;
```

- *Type:* string

---

##### `attrKeyInput`<sup>Optional</sup> <a name="attrKeyInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKeyInput"></a>

```typescript
public readonly attrKeyInput: string;
```

- *Type:* string

---

##### `attrValueInput`<sup>Optional</sup> <a name="attrValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValueInput"></a>

```typescript
public readonly attrValueInput: string;
```

- *Type:* string

---

##### `attrGroup`<sup>Required</sup> <a name="attrGroup" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup"></a>

```typescript
public readonly attrGroup: string;
```

- *Type:* string

---

##### `attrKey`<sup>Required</sup> <a name="attrKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey"></a>

```typescript
public readonly attrKey: string;
```

- *Type:* string

---

##### `attrValue`<sup>Required</sup> <a name="attrValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue"></a>

```typescript
public readonly attrValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesList <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get"></a>

```typescript
public get(index: number): FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>[]

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resetBasis">resetBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]

---

##### `resetBasis` <a name="resetBasis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resetBasis"></a>

```typescript
public resetBasis(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basisInput">basisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentIdInput">resourceCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis">basis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a>

---

##### `basisInput`<sup>Optional</sup> <a name="basisInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basisInput"></a>

```typescript
public readonly basisInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>[]

---

##### `resourceCompartmentIdInput`<sup>Optional</sup> <a name="resourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentIdInput"></a>

```typescript
public readonly resourceCompartmentIdInput: string;
```

- *Type:* string

---

##### `basis`<sup>Required</sup> <a name="basis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis"></a>

```typescript
public readonly basis: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetAppsManagementFleetRuleSelectionCriteriaRules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>

---


### FleetAppsManagementFleetTimeoutsOutputReference <a name="FleetAppsManagementFleetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer"></a>

```typescript
import { fleetAppsManagementFleet } from 'rhizo-co-terraform-provider-oci'

new fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FleetAppsManagementFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---



