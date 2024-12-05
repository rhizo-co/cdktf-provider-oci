# `coreInstance` Submodule <a name="`coreInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstance <a name="CoreInstance" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance oci_core_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstance(scope: Construct, id: string, config: CoreInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig">CoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig">CoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig">putAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig">putAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails">putCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions">putInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions">putLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments">putLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig">putPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig">putPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig">resetAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync">resetAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig">resetAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId">resetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId">resetComputeClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails">resetCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId">resetDedicatedVmHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata">resetExtendedMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId">resetInstanceConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions">resetInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript">resetIpxeScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions">resetLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments">resetLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig">resetPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig">resetPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume">resetPreserveBootVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch">resetPreserveDataVolumesCreatedAtLaunch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig">resetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint">resetUpdateOperationConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentConfig` <a name="putAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig"></a>

```typescript
public putAgentConfig(value: CoreInstanceAgentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `putAvailabilityConfig` <a name="putAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig"></a>

```typescript
public putAvailabilityConfig(value: CoreInstanceAvailabilityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `putCreateVnicDetails` <a name="putCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails"></a>

```typescript
public putCreateVnicDetails(value: CoreInstanceCreateVnicDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `putInstanceOptions` <a name="putInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions"></a>

```typescript
public putInstanceOptions(value: CoreInstanceInstanceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `putLaunchOptions` <a name="putLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions"></a>

```typescript
public putLaunchOptions(value: CoreInstanceLaunchOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `putLaunchVolumeAttachments` <a name="putLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments"></a>

```typescript
public putLaunchVolumeAttachments(value: IResolvable | CoreInstanceLaunchVolumeAttachments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]

---

##### `putPlatformConfig` <a name="putPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig"></a>

```typescript
public putPlatformConfig(value: CoreInstancePlatformConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `putPreemptibleInstanceConfig` <a name="putPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig"></a>

```typescript
public putPreemptibleInstanceConfig(value: CoreInstancePreemptibleInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig"></a>

```typescript
public putShapeConfig(value: CoreInstanceShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails"></a>

```typescript
public putSourceDetails(value: CoreInstanceSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---

##### `resetAgentConfig` <a name="resetAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig"></a>

```typescript
public resetAgentConfig(): void
```

##### `resetAsync` <a name="resetAsync" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync"></a>

```typescript
public resetAsync(): void
```

##### `resetAvailabilityConfig` <a name="resetAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig"></a>

```typescript
public resetAvailabilityConfig(): void
```

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetClusterPlacementGroupId` <a name="resetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId"></a>

```typescript
public resetClusterPlacementGroupId(): void
```

##### `resetComputeClusterId` <a name="resetComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId"></a>

```typescript
public resetComputeClusterId(): void
```

##### `resetCreateVnicDetails` <a name="resetCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails"></a>

```typescript
public resetCreateVnicDetails(): void
```

##### `resetDedicatedVmHostId` <a name="resetDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId"></a>

```typescript
public resetDedicatedVmHostId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExtendedMetadata` <a name="resetExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata"></a>

```typescript
public resetExtendedMetadata(): void
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain"></a>

```typescript
public resetFaultDomain(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel"></a>

```typescript
public resetHostnameLabel(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImage` <a name="resetImage" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetInstanceConfigurationId` <a name="resetInstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId"></a>

```typescript
public resetInstanceConfigurationId(): void
```

##### `resetInstanceOptions` <a name="resetInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions"></a>

```typescript
public resetInstanceOptions(): void
```

##### `resetIpxeScript` <a name="resetIpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript"></a>

```typescript
public resetIpxeScript(): void
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled"></a>

```typescript
public resetIsPvEncryptionInTransitEnabled(): void
```

##### `resetLaunchOptions` <a name="resetLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions"></a>

```typescript
public resetLaunchOptions(): void
```

##### `resetLaunchVolumeAttachments` <a name="resetLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments"></a>

```typescript
public resetLaunchVolumeAttachments(): void
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPlatformConfig` <a name="resetPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig"></a>

```typescript
public resetPlatformConfig(): void
```

##### `resetPreemptibleInstanceConfig` <a name="resetPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig"></a>

```typescript
public resetPreemptibleInstanceConfig(): void
```

##### `resetPreserveBootVolume` <a name="resetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume"></a>

```typescript
public resetPreserveBootVolume(): void
```

##### `resetPreserveDataVolumesCreatedAtLaunch` <a name="resetPreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch"></a>

```typescript
public resetPreserveDataVolumesCreatedAtLaunch(): void
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes"></a>

```typescript
public resetSecurityAttributes(): void
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape"></a>

```typescript
public resetShape(): void
```

##### `resetShapeConfig` <a name="resetShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig"></a>

```typescript
public resetShapeConfig(): void
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails"></a>

```typescript
public resetSourceDetails(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateOperationConstraint` <a name="resetUpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint"></a>

```typescript
public resetUpdateOperationConstraint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

coreInstance.CoreInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

coreInstance.CoreInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

coreInstance.CoreInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

coreInstance.CoreInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig">agentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig">availabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId">bootVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions">instanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode">isCrossNumaNode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode">launchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions">launchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments">launchVolumeAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig">platformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig">preemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState">securityAttributesState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue">timeMaintenanceRebootDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput">agentConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput">asyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput">availabilityConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput">clusterPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput">createVnicDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput">dedicatedVmHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput">extendedMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput">faultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput">instanceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput">instanceOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput">ipxeScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput">launchOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput">launchVolumeAttachmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput">platformConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput">preemptibleInstanceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput">preserveBootVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput">preserveDataVolumesCreatedAtLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput">securityAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput">updateOperationConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async">async</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata">extendedMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript">ipxeScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume">preserveBootVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch">preserveDataVolumesCreatedAtLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint">updateOperationConstraint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentConfig`<sup>Required</sup> <a name="agentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig"></a>

```typescript
public readonly agentConfig: CoreInstanceAgentConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a>

---

##### `availabilityConfig`<sup>Required</sup> <a name="availabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig"></a>

```typescript
public readonly availabilityConfig: CoreInstanceAvailabilityConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a>

---

##### `bootVolumeId`<sup>Required</sup> <a name="bootVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId"></a>

```typescript
public readonly bootVolumeId: string;
```

- *Type:* string

---

##### `createVnicDetails`<sup>Required</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails"></a>

```typescript
public readonly createVnicDetails: CoreInstanceCreateVnicDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a>

---

##### `instanceOptions`<sup>Required</sup> <a name="instanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions"></a>

```typescript
public readonly instanceOptions: CoreInstanceInstanceOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a>

---

##### `isCrossNumaNode`<sup>Required</sup> <a name="isCrossNumaNode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode"></a>

```typescript
public readonly isCrossNumaNode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `launchMode`<sup>Required</sup> <a name="launchMode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode"></a>

```typescript
public readonly launchMode: string;
```

- *Type:* string

---

##### `launchOptions`<sup>Required</sup> <a name="launchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions"></a>

```typescript
public readonly launchOptions: CoreInstanceLaunchOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a>

---

##### `launchVolumeAttachments`<sup>Required</sup> <a name="launchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments"></a>

```typescript
public readonly launchVolumeAttachments: CoreInstanceLaunchVolumeAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a>

---

##### `platformConfig`<sup>Required</sup> <a name="platformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig"></a>

```typescript
public readonly platformConfig: CoreInstancePlatformConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a>

---

##### `preemptibleInstanceConfig`<sup>Required</sup> <a name="preemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig"></a>

```typescript
public readonly preemptibleInstanceConfig: CoreInstancePreemptibleInstanceConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityAttributesState`<sup>Required</sup> <a name="securityAttributesState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState"></a>

```typescript
public readonly securityAttributesState: string;
```

- *Type:* string

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: CoreInstanceShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a>

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: CoreInstanceSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeMaintenanceRebootDue`<sup>Required</sup> <a name="timeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue"></a>

```typescript
public readonly timeMaintenanceRebootDue: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts"></a>

```typescript
public readonly timeouts: CoreInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a>

---

##### `agentConfigInput`<sup>Optional</sup> <a name="agentConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput"></a>

```typescript
public readonly agentConfigInput: CoreInstanceAgentConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `asyncInput`<sup>Optional</sup> <a name="asyncInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput"></a>

```typescript
public readonly asyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityConfigInput`<sup>Optional</sup> <a name="availabilityConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput"></a>

```typescript
public readonly availabilityConfigInput: CoreInstanceAvailabilityConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `clusterPlacementGroupIdInput`<sup>Optional</sup> <a name="clusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput"></a>

```typescript
public readonly clusterPlacementGroupIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput"></a>

```typescript
public readonly computeClusterIdInput: string;
```

- *Type:* string

---

##### `createVnicDetailsInput`<sup>Optional</sup> <a name="createVnicDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput"></a>

```typescript
public readonly createVnicDetailsInput: CoreInstanceCreateVnicDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `dedicatedVmHostIdInput`<sup>Optional</sup> <a name="dedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput"></a>

```typescript
public readonly dedicatedVmHostIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `extendedMetadataInput`<sup>Optional</sup> <a name="extendedMetadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput"></a>

```typescript
public readonly extendedMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput"></a>

```typescript
public readonly hostnameLabelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `instanceConfigurationIdInput`<sup>Optional</sup> <a name="instanceConfigurationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput"></a>

```typescript
public readonly instanceConfigurationIdInput: string;
```

- *Type:* string

---

##### `instanceOptionsInput`<sup>Optional</sup> <a name="instanceOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput"></a>

```typescript
public readonly instanceOptionsInput: CoreInstanceInstanceOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `ipxeScriptInput`<sup>Optional</sup> <a name="ipxeScriptInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput"></a>

```typescript
public readonly ipxeScriptInput: string;
```

- *Type:* string

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput"></a>

```typescript
public readonly isPvEncryptionInTransitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `launchOptionsInput`<sup>Optional</sup> <a name="launchOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput"></a>

```typescript
public readonly launchOptionsInput: CoreInstanceLaunchOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `launchVolumeAttachmentsInput`<sup>Optional</sup> <a name="launchVolumeAttachmentsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput"></a>

```typescript
public readonly launchVolumeAttachmentsInput: IResolvable | CoreInstanceLaunchVolumeAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platformConfigInput`<sup>Optional</sup> <a name="platformConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput"></a>

```typescript
public readonly platformConfigInput: CoreInstancePlatformConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `preemptibleInstanceConfigInput`<sup>Optional</sup> <a name="preemptibleInstanceConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput"></a>

```typescript
public readonly preemptibleInstanceConfigInput: CoreInstancePreemptibleInstanceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `preserveBootVolumeInput`<sup>Optional</sup> <a name="preserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput"></a>

```typescript
public readonly preserveBootVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preserveDataVolumesCreatedAtLaunchInput`<sup>Optional</sup> <a name="preserveDataVolumesCreatedAtLaunchInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput"></a>

```typescript
public readonly preserveDataVolumesCreatedAtLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput"></a>

```typescript
public readonly securityAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput"></a>

```typescript
public readonly shapeConfigInput: CoreInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput"></a>

```typescript
public readonly sourceDetailsInput: CoreInstanceSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---

##### `updateOperationConstraintInput`<sup>Optional</sup> <a name="updateOperationConstraintInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput"></a>

```typescript
public readonly updateOperationConstraintInput: string;
```

- *Type:* string

---

##### `async`<sup>Required</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async"></a>

```typescript
public readonly async: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

---

##### `dedicatedVmHostId`<sup>Required</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId"></a>

```typescript
public readonly dedicatedVmHostId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `extendedMetadata`<sup>Required</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata"></a>

```typescript
public readonly extendedMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId"></a>

```typescript
public readonly instanceConfigurationId: string;
```

- *Type:* string

---

##### `ipxeScript`<sup>Required</sup> <a name="ipxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript"></a>

```typescript
public readonly ipxeScript: string;
```

- *Type:* string

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `preserveBootVolume`<sup>Required</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume"></a>

```typescript
public readonly preserveBootVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preserveDataVolumesCreatedAtLaunch`<sup>Required</sup> <a name="preserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch"></a>

```typescript
public readonly preserveDataVolumesCreatedAtLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `updateOperationConstraint`<sup>Required</sup> <a name="updateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint"></a>

```typescript
public readonly updateOperationConstraint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceAgentConfig <a name="CoreInstanceAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceAgentConfig: coreInstance.CoreInstanceAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled">areAllPluginsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled">isManagementDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled">isMonitoringDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig">pluginsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]</code> | plugins_config block. |

---

##### `areAllPluginsDisabled`<sup>Optional</sup> <a name="areAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled"></a>

```typescript
public readonly areAllPluginsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}.

---

##### `isManagementDisabled`<sup>Optional</sup> <a name="isManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled"></a>

```typescript
public readonly isManagementDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}.

---

##### `isMonitoringDisabled`<sup>Optional</sup> <a name="isMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled"></a>

```typescript
public readonly isMonitoringDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}.

---

##### `pluginsConfig`<sup>Optional</sup> <a name="pluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig"></a>

```typescript
public readonly pluginsConfig: IResolvable | CoreInstanceAgentConfigPluginsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]

plugins_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}

---

### CoreInstanceAgentConfigPluginsConfig <a name="CoreInstanceAgentConfigPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceAgentConfigPluginsConfig: coreInstance.CoreInstanceAgentConfigPluginsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}. |

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}.

---

### CoreInstanceAvailabilityConfig <a name="CoreInstanceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceAvailabilityConfig: coreInstance.CoreInstanceAvailabilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred">isLiveMigrationPreferred</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction">recoveryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}. |

---

##### `isLiveMigrationPreferred`<sup>Optional</sup> <a name="isLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred"></a>

```typescript
public readonly isLiveMigrationPreferred: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}.

---

##### `recoveryAction`<sup>Optional</sup> <a name="recoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction"></a>

```typescript
public readonly recoveryAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}.

---

### CoreInstanceConfig <a name="CoreInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceConfig: coreInstance.CoreInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig">agentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async">async</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig">availabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId">computeClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata">extendedMetadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain">faultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions">instanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript">ipxeScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions">launchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments">launchVolumeAttachments</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]</code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig">platformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig">preemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume">preserveBootVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch">preserveDataVolumesCreatedAtLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint">updateOperationConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `agentConfig`<sup>Optional</sup> <a name="agentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig"></a>

```typescript
public readonly agentConfig: CoreInstanceAgentConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `async`<sup>Optional</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async"></a>

```typescript
public readonly async: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `availabilityConfig`<sup>Optional</sup> <a name="availabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig"></a>

```typescript
public readonly availabilityConfig: CoreInstanceAvailabilityConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `clusterPlacementGroupId`<sup>Optional</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `computeClusterId`<sup>Optional</sup> <a name="computeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId"></a>

```typescript
public readonly computeClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `createVnicDetails`<sup>Optional</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails"></a>

```typescript
public readonly createVnicDetails: CoreInstanceCreateVnicDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `dedicatedVmHostId`<sup>Optional</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId"></a>

```typescript
public readonly dedicatedVmHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `extendedMetadata`<sup>Optional</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata"></a>

```typescript
public readonly extendedMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `instanceConfigurationId`<sup>Optional</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId"></a>

```typescript
public readonly instanceConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `instanceOptions`<sup>Optional</sup> <a name="instanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions"></a>

```typescript
public readonly instanceOptions: CoreInstanceInstanceOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `ipxeScript`<sup>Optional</sup> <a name="ipxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript"></a>

```typescript
public readonly ipxeScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `launchOptions`<sup>Optional</sup> <a name="launchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions"></a>

```typescript
public readonly launchOptions: CoreInstanceLaunchOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `launchVolumeAttachments`<sup>Optional</sup> <a name="launchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments"></a>

```typescript
public readonly launchVolumeAttachments: IResolvable | CoreInstanceLaunchVolumeAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `platformConfig`<sup>Optional</sup> <a name="platformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig"></a>

```typescript
public readonly platformConfig: CoreInstancePlatformConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `preemptibleInstanceConfig`<sup>Optional</sup> <a name="preemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig"></a>

```typescript
public readonly preemptibleInstanceConfig: CoreInstancePreemptibleInstanceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `preserveBootVolume`<sup>Optional</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume"></a>

```typescript
public readonly preserveBootVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `preserveDataVolumesCreatedAtLaunch`<sup>Optional</sup> <a name="preserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch"></a>

```typescript
public readonly preserveDataVolumesCreatedAtLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `shapeConfig`<sup>Optional</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: CoreInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: CoreInstanceSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `updateOperationConstraint`<sup>Optional</sup> <a name="updateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint"></a>

```typescript
public readonly updateOperationConstraint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

### CoreInstanceCreateVnicDetails <a name="CoreInstanceCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceCreateVnicDetails: coreInstance.CoreInstanceCreateVnicDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]</code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId">vlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}. |

---

##### `assignIpv6Ip`<sup>Optional</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip"></a>

```typescript
public readonly assignIpv6Ip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}.

---

##### `assignPrivateDnsRecord`<sup>Optional</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```typescript
public readonly assignPrivateDnsRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: IResolvable | CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `skipSourceDestCheck`<sup>Optional</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck"></a>

```typescript
public readonly skipSourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}.

---

### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails: coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}.

---

##### `ipv6SubnetCidr`<sup>Optional</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}.

---

### CoreInstanceInstanceOptions <a name="CoreInstanceInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceInstanceOptions: coreInstance.CoreInstanceInstanceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled">areLegacyImdsEndpointsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}. |

---

##### `areLegacyImdsEndpointsDisabled`<sup>Optional</sup> <a name="areLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled"></a>

```typescript
public readonly areLegacyImdsEndpointsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}.

---

### CoreInstanceLaunchOptions <a name="CoreInstanceLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceLaunchOptions: coreInstance.CoreInstanceLaunchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType">bootVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware">firmware</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled">isConsistentVolumeNamingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType">remoteDataVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}. |

---

##### `bootVolumeType`<sup>Optional</sup> <a name="bootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType"></a>

```typescript
public readonly bootVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}.

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}.

---

##### `isConsistentVolumeNamingEnabled`<sup>Optional</sup> <a name="isConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled"></a>

```typescript
public readonly isConsistentVolumeNamingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}.

---

##### `remoteDataVolumeType`<sup>Optional</sup> <a name="remoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType"></a>

```typescript
public readonly remoteDataVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}.

---

### CoreInstanceLaunchVolumeAttachments <a name="CoreInstanceLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceLaunchVolumeAttachments: coreInstance.CoreInstanceLaunchVolumeAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device">device</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType">encryptionInTransitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled">isAgentAutoIscsiLoginEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly">isReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable">isShareable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails">launchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | launch_create_volume_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap">useChap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId">volumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `device`<sup>Optional</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `encryptionInTransitType`<sup>Optional</sup> <a name="encryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType"></a>

```typescript
public readonly encryptionInTransitType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}.

---

##### `isAgentAutoIscsiLoginEnabled`<sup>Optional</sup> <a name="isAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled"></a>

```typescript
public readonly isAgentAutoIscsiLoginEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `isReadOnly`<sup>Optional</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}.

---

##### `isShareable`<sup>Optional</sup> <a name="isShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable"></a>

```typescript
public readonly isShareable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}.

---

##### `launchCreateVolumeDetails`<sup>Optional</sup> <a name="launchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails"></a>

```typescript
public readonly launchCreateVolumeDetails: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

launch_create_volume_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_create_volume_details CoreInstance#launch_create_volume_details}

---

##### `useChap`<sup>Optional</sup> <a name="useChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap"></a>

```typescript
public readonly useChap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}.

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}.

---

### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails: coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType">volumeCreationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb">vpusPerGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}. |

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}.

---

##### `volumeCreationType`<sup>Required</sup> <a name="volumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType"></a>

```typescript
public readonly volumeCreationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `vpusPerGb`<sup>Optional</sup> <a name="vpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb"></a>

```typescript
public readonly vpusPerGb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}.

---

### CoreInstancePlatformConfig <a name="CoreInstancePlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstancePlatformConfig: coreInstance.CoreInstancePlatformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled">areVirtualInstructionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap">configMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled">isAccessControlServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled">isInputOutputMemoryManagementUnitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled">isMeasuredBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled">isMemoryEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled">isSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled">isSymmetricMultiThreadingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled">isTrustedPlatformModuleEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket">numaNodesPerSocket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled">percentageOfCoresEnabled</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `areVirtualInstructionsEnabled`<sup>Optional</sup> <a name="areVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled"></a>

```typescript
public readonly areVirtualInstructionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}.

---

##### `configMap`<sup>Optional</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap"></a>

```typescript
public readonly configMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}.

---

##### `isAccessControlServiceEnabled`<sup>Optional</sup> <a name="isAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled"></a>

```typescript
public readonly isAccessControlServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}.

---

##### `isInputOutputMemoryManagementUnitEnabled`<sup>Optional</sup> <a name="isInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled"></a>

```typescript
public readonly isInputOutputMemoryManagementUnitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}.

---

##### `isMeasuredBootEnabled`<sup>Optional</sup> <a name="isMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled"></a>

```typescript
public readonly isMeasuredBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}.

---

##### `isMemoryEncryptionEnabled`<sup>Optional</sup> <a name="isMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled"></a>

```typescript
public readonly isMemoryEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}.

---

##### `isSecureBootEnabled`<sup>Optional</sup> <a name="isSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled"></a>

```typescript
public readonly isSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}.

---

##### `isSymmetricMultiThreadingEnabled`<sup>Optional</sup> <a name="isSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled"></a>

```typescript
public readonly isSymmetricMultiThreadingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}.

---

##### `isTrustedPlatformModuleEnabled`<sup>Optional</sup> <a name="isTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled"></a>

```typescript
public readonly isTrustedPlatformModuleEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}.

---

##### `numaNodesPerSocket`<sup>Optional</sup> <a name="numaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket"></a>

```typescript
public readonly numaNodesPerSocket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}.

---

##### `percentageOfCoresEnabled`<sup>Optional</sup> <a name="percentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled"></a>

```typescript
public readonly percentageOfCoresEnabled: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}.

---

### CoreInstancePreemptibleInstanceConfig <a name="CoreInstancePreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstancePreemptibleInstanceConfig: coreInstance.CoreInstancePreemptibleInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction"></a>

```typescript
public readonly preemptionAction: CoreInstancePreemptibleInstanceConfigPreemptionAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}

---

### CoreInstancePreemptibleInstanceConfigPreemptionAction <a name="CoreInstancePreemptibleInstanceConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstancePreemptibleInstanceConfigPreemptionAction: coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume">preserveBootVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `preserveBootVolume`<sup>Optional</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume"></a>

```typescript
public readonly preserveBootVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

### CoreInstanceShapeConfig <a name="CoreInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceShapeConfig: coreInstance.CoreInstanceShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes">nvmes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus">vcpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}. |

---

##### `baselineOcpuUtilization`<sup>Optional</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization"></a>

```typescript
public readonly baselineOcpuUtilization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes"></a>

```typescript
public readonly nvmes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}.

---

### CoreInstanceSourceDetails <a name="CoreInstanceSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceSourceDetails: coreInstance.CoreInstanceSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb">bootVolumeVpusPerGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails">instanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | instance_source_image_filter_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled">isPreserveBootVolumeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}.

---

##### `bootVolumeSizeInGbs`<sup>Optional</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs"></a>

```typescript
public readonly bootVolumeSizeInGbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}.

---

##### `bootVolumeVpusPerGb`<sup>Optional</sup> <a name="bootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb"></a>

```typescript
public readonly bootVolumeVpusPerGb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}.

---

##### `instanceSourceImageFilterDetails`<sup>Optional</sup> <a name="instanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails"></a>

```typescript
public readonly instanceSourceImageFilterDetails: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

instance_source_image_filter_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}

---

##### `isPreserveBootVolumeEnabled`<sup>Optional</sup> <a name="isPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled"></a>

```typescript
public readonly isPreserveBootVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}.

---

### CoreInstanceSourceDetailsInstanceSourceImageFilterDetails <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceSourceDetailsInstanceSourceImageFilterDetails: coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter">definedTagsFilter</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `definedTagsFilter`<sup>Optional</sup> <a name="definedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter"></a>

```typescript
public readonly definedTagsFilter: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}.

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion"></a>

```typescript
public readonly operatingSystemVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}.

---

### CoreInstanceTimeouts <a name="CoreInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

const coreInstanceTimeouts: coreInstance.CoreInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceAgentConfigOutputReference <a name="CoreInstanceAgentConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceAgentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig">putPluginsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled">resetAreAllPluginsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled">resetIsManagementDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled">resetIsMonitoringDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig">resetPluginsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPluginsConfig` <a name="putPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig"></a>

```typescript
public putPluginsConfig(value: IResolvable | CoreInstanceAgentConfigPluginsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]

---

##### `resetAreAllPluginsDisabled` <a name="resetAreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled"></a>

```typescript
public resetAreAllPluginsDisabled(): void
```

##### `resetIsManagementDisabled` <a name="resetIsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled"></a>

```typescript
public resetIsManagementDisabled(): void
```

##### `resetIsMonitoringDisabled` <a name="resetIsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled"></a>

```typescript
public resetIsMonitoringDisabled(): void
```

##### `resetPluginsConfig` <a name="resetPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig"></a>

```typescript
public resetPluginsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig">pluginsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput">areAllPluginsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput">isManagementDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput">isMonitoringDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput">pluginsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled">areAllPluginsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled">isManagementDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled">isMonitoringDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pluginsConfig`<sup>Required</sup> <a name="pluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig"></a>

```typescript
public readonly pluginsConfig: CoreInstanceAgentConfigPluginsConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a>

---

##### `areAllPluginsDisabledInput`<sup>Optional</sup> <a name="areAllPluginsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput"></a>

```typescript
public readonly areAllPluginsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isManagementDisabledInput`<sup>Optional</sup> <a name="isManagementDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput"></a>

```typescript
public readonly isManagementDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMonitoringDisabledInput`<sup>Optional</sup> <a name="isMonitoringDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput"></a>

```typescript
public readonly isMonitoringDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pluginsConfigInput`<sup>Optional</sup> <a name="pluginsConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput"></a>

```typescript
public readonly pluginsConfigInput: IResolvable | CoreInstanceAgentConfigPluginsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]

---

##### `areAllPluginsDisabled`<sup>Required</sup> <a name="areAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled"></a>

```typescript
public readonly areAllPluginsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isManagementDisabled`<sup>Required</sup> <a name="isManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled"></a>

```typescript
public readonly isManagementDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMonitoringDisabled`<sup>Required</sup> <a name="isMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled"></a>

```typescript
public readonly isMonitoringDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceAgentConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---


### CoreInstanceAgentConfigPluginsConfigList <a name="CoreInstanceAgentConfigPluginsConfigList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceAgentConfigPluginsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get"></a>

```typescript
public get(index: number): CoreInstanceAgentConfigPluginsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceAgentConfigPluginsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>[]

---


### CoreInstanceAgentConfigPluginsConfigOutputReference <a name="CoreInstanceAgentConfigPluginsConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceAgentConfigPluginsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>

---


### CoreInstanceAvailabilityConfigOutputReference <a name="CoreInstanceAvailabilityConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceAvailabilityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred">resetIsLiveMigrationPreferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction">resetRecoveryAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLiveMigrationPreferred` <a name="resetIsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred"></a>

```typescript
public resetIsLiveMigrationPreferred(): void
```

##### `resetRecoveryAction` <a name="resetRecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction"></a>

```typescript
public resetRecoveryAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput">isLiveMigrationPreferredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput">recoveryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred">isLiveMigrationPreferred</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction">recoveryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isLiveMigrationPreferredInput`<sup>Optional</sup> <a name="isLiveMigrationPreferredInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput"></a>

```typescript
public readonly isLiveMigrationPreferredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recoveryActionInput`<sup>Optional</sup> <a name="recoveryActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput"></a>

```typescript
public readonly recoveryActionInput: string;
```

- *Type:* string

---

##### `isLiveMigrationPreferred`<sup>Required</sup> <a name="isLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred"></a>

```typescript
public readonly isLiveMigrationPreferred: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recoveryAction`<sup>Required</sup> <a name="recoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction"></a>

```typescript
public readonly recoveryAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceAvailabilityConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```typescript
public get(index: number): CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">resetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetIpv6SubnetCidr` <a name="resetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```typescript
public resetIpv6SubnetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6SubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `ipv6SubnetCidrInput`<sup>Optional</sup> <a name="ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```typescript
public readonly ipv6SubnetCidrInput: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```typescript
public readonly ipv6SubnetCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### CoreInstanceCreateVnicDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceCreateVnicDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">putIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip">resetAssignIpv6Ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">resetAssignPrivateDnsRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">resetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">resetSkipSourceDestCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv6AddressIpv6SubnetCidrPairDetails` <a name="putIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public putIpv6AddressIpv6SubnetCidrPairDetails(value: IResolvable | CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]

---

##### `resetAssignIpv6Ip` <a name="resetAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```typescript
public resetAssignIpv6Ip(): void
```

##### `resetAssignPrivateDnsRecord` <a name="resetAssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```typescript
public resetAssignPrivateDnsRecord(): void
```

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```typescript
public resetHostnameLabel(): void
```

##### `resetIpv6AddressIpv6SubnetCidrPairDetails` <a name="resetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public resetIpv6AddressIpv6SubnetCidrPairDetails(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```typescript
public resetSecurityAttributes(): void
```

##### `resetSkipSourceDestCheck` <a name="resetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```typescript
public resetSkipSourceDestCheck(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId"></a>

```typescript
public resetVlanId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput">assignIpv6IpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">assignPrivateDnsRecordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput">securityAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">skipSourceDestCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetails: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `assignIpv6IpInput`<sup>Optional</sup> <a name="assignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```typescript
public readonly assignIpv6IpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assignPrivateDnsRecordInput`<sup>Optional</sup> <a name="assignPrivateDnsRecordInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```typescript
public readonly assignPrivateDnsRecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```typescript
public readonly hostnameLabelInput: string;
```

- *Type:* string

---

##### `ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```typescript
public readonly ipv6AddressIpv6SubnetCidrPairDetailsInput: IResolvable | CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>[]

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```typescript
public readonly securityAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `skipSourceDestCheckInput`<sup>Optional</sup> <a name="skipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```typescript
public readonly skipSourceDestCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: string;
```

- *Type:* string

---

##### `assignIpv6Ip`<sup>Required</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```typescript
public readonly assignIpv6Ip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assignPrivateDnsRecord`<sup>Required</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```typescript
public readonly assignPrivateDnsRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```typescript
public readonly skipSourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceCreateVnicDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---


### CoreInstanceInstanceOptionsOutputReference <a name="CoreInstanceInstanceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceInstanceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled">resetAreLegacyImdsEndpointsDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAreLegacyImdsEndpointsDisabled` <a name="resetAreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled"></a>

```typescript
public resetAreLegacyImdsEndpointsDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput">areLegacyImdsEndpointsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled">areLegacyImdsEndpointsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areLegacyImdsEndpointsDisabledInput`<sup>Optional</sup> <a name="areLegacyImdsEndpointsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput"></a>

```typescript
public readonly areLegacyImdsEndpointsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `areLegacyImdsEndpointsDisabled`<sup>Required</sup> <a name="areLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled"></a>

```typescript
public readonly areLegacyImdsEndpointsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceInstanceOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---


### CoreInstanceLaunchOptionsOutputReference <a name="CoreInstanceLaunchOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceLaunchOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType">resetBootVolumeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled">resetIsConsistentVolumeNamingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType">resetRemoteDataVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootVolumeType` <a name="resetBootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType"></a>

```typescript
public resetBootVolumeType(): void
```

##### `resetFirmware` <a name="resetFirmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware"></a>

```typescript
public resetFirmware(): void
```

##### `resetIsConsistentVolumeNamingEnabled` <a name="resetIsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled"></a>

```typescript
public resetIsConsistentVolumeNamingEnabled(): void
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```typescript
public resetIsPvEncryptionInTransitEnabled(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetRemoteDataVolumeType` <a name="resetRemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType"></a>

```typescript
public resetRemoteDataVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput">bootVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput">firmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput">isConsistentVolumeNamingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput">remoteDataVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType">bootVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled">isConsistentVolumeNamingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType">remoteDataVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootVolumeTypeInput`<sup>Optional</sup> <a name="bootVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput"></a>

```typescript
public readonly bootVolumeTypeInput: string;
```

- *Type:* string

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput"></a>

```typescript
public readonly firmwareInput: string;
```

- *Type:* string

---

##### `isConsistentVolumeNamingEnabledInput`<sup>Optional</sup> <a name="isConsistentVolumeNamingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput"></a>

```typescript
public readonly isConsistentVolumeNamingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```typescript
public readonly isPvEncryptionInTransitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `remoteDataVolumeTypeInput`<sup>Optional</sup> <a name="remoteDataVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput"></a>

```typescript
public readonly remoteDataVolumeTypeInput: string;
```

- *Type:* string

---

##### `bootVolumeType`<sup>Required</sup> <a name="bootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType"></a>

```typescript
public readonly bootVolumeType: string;
```

- *Type:* string

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `isConsistentVolumeNamingEnabled`<sup>Required</sup> <a name="isConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled"></a>

```typescript
public readonly isConsistentVolumeNamingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `remoteDataVolumeType`<sup>Required</sup> <a name="remoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType"></a>

```typescript
public readonly remoteDataVolumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceLaunchOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---


### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb">resetVpusPerGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetVpusPerGb` <a name="resetVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb"></a>

```typescript
public resetVpusPerGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput">sizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput">volumeCreationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput">vpusPerGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs">sizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType">volumeCreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb">vpusPerGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `sizeInGbsInput`<sup>Optional</sup> <a name="sizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput"></a>

```typescript
public readonly sizeInGbsInput: string;
```

- *Type:* string

---

##### `volumeCreationTypeInput`<sup>Optional</sup> <a name="volumeCreationTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput"></a>

```typescript
public readonly volumeCreationTypeInput: string;
```

- *Type:* string

---

##### `vpusPerGbInput`<sup>Optional</sup> <a name="vpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput"></a>

```typescript
public readonly vpusPerGbInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs"></a>

```typescript
public readonly sizeInGbs: string;
```

- *Type:* string

---

##### `volumeCreationType`<sup>Required</sup> <a name="volumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType"></a>

```typescript
public readonly volumeCreationType: string;
```

- *Type:* string

---

##### `vpusPerGb`<sup>Required</sup> <a name="vpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb"></a>

```typescript
public readonly vpusPerGb: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---


### CoreInstanceLaunchVolumeAttachmentsList <a name="CoreInstanceLaunchVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceLaunchVolumeAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get"></a>

```typescript
public get(index: number): CoreInstanceLaunchVolumeAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceLaunchVolumeAttachments[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>[]

---


### CoreInstanceLaunchVolumeAttachmentsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails">putLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType">resetEncryptionInTransitType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled">resetIsAgentAutoIscsiLoginEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly">resetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable">resetIsShareable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails">resetLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap">resetUseChap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchCreateVolumeDetails` <a name="putLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails"></a>

```typescript
public putLaunchCreateVolumeDetails(value: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `resetDevice` <a name="resetDevice" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice"></a>

```typescript
public resetDevice(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionInTransitType` <a name="resetEncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType"></a>

```typescript
public resetEncryptionInTransitType(): void
```

##### `resetIsAgentAutoIscsiLoginEnabled` <a name="resetIsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled"></a>

```typescript
public resetIsAgentAutoIscsiLoginEnabled(): void
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```typescript
public resetIsPvEncryptionInTransitEnabled(): void
```

##### `resetIsReadOnly` <a name="resetIsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly"></a>

```typescript
public resetIsReadOnly(): void
```

##### `resetIsShareable` <a name="resetIsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable"></a>

```typescript
public resetIsShareable(): void
```

##### `resetLaunchCreateVolumeDetails` <a name="resetLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails"></a>

```typescript
public resetLaunchCreateVolumeDetails(): void
```

##### `resetUseChap` <a name="resetUseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap"></a>

```typescript
public resetUseChap(): void
```

##### `resetVolumeId` <a name="resetVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId"></a>

```typescript
public resetVolumeId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails">launchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput">deviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput">encryptionInTransitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput">isAgentAutoIscsiLoginEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput">isReadOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput">isShareableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput">launchCreateVolumeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput">useChapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType">encryptionInTransitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">isAgentAutoIscsiLoginEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable">isShareable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap">useChap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchCreateVolumeDetails`<sup>Required</sup> <a name="launchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails"></a>

```typescript
public readonly launchCreateVolumeDetails: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a>

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput"></a>

```typescript
public readonly deviceInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionInTransitTypeInput`<sup>Optional</sup> <a name="encryptionInTransitTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput"></a>

```typescript
public readonly encryptionInTransitTypeInput: string;
```

- *Type:* string

---

##### `isAgentAutoIscsiLoginEnabledInput`<sup>Optional</sup> <a name="isAgentAutoIscsiLoginEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput"></a>

```typescript
public readonly isAgentAutoIscsiLoginEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```typescript
public readonly isPvEncryptionInTransitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isReadOnlyInput`<sup>Optional</sup> <a name="isReadOnlyInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput"></a>

```typescript
public readonly isReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShareableInput`<sup>Optional</sup> <a name="isShareableInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput"></a>

```typescript
public readonly isShareableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `launchCreateVolumeDetailsInput`<sup>Optional</sup> <a name="launchCreateVolumeDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput"></a>

```typescript
public readonly launchCreateVolumeDetailsInput: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `useChapInput`<sup>Optional</sup> <a name="useChapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput"></a>

```typescript
public readonly useChapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `encryptionInTransitType`<sup>Required</sup> <a name="encryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```typescript
public readonly encryptionInTransitType: string;
```

- *Type:* string

---

##### `isAgentAutoIscsiLoginEnabled`<sup>Required</sup> <a name="isAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```typescript
public readonly isAgentAutoIscsiLoginEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShareable`<sup>Required</sup> <a name="isShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable"></a>

```typescript
public readonly isShareable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useChap`<sup>Required</sup> <a name="useChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap"></a>

```typescript
public readonly useChap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceLaunchVolumeAttachments;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>

---


### CoreInstancePlatformConfigOutputReference <a name="CoreInstancePlatformConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstancePlatformConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled">resetAreVirtualInstructionsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap">resetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled">resetIsAccessControlServiceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled">resetIsInputOutputMemoryManagementUnitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled">resetIsMeasuredBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled">resetIsMemoryEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled">resetIsSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled">resetIsSymmetricMultiThreadingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled">resetIsTrustedPlatformModuleEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket">resetNumaNodesPerSocket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled">resetPercentageOfCoresEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAreVirtualInstructionsEnabled` <a name="resetAreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled"></a>

```typescript
public resetAreVirtualInstructionsEnabled(): void
```

##### `resetConfigMap` <a name="resetConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap"></a>

```typescript
public resetConfigMap(): void
```

##### `resetIsAccessControlServiceEnabled` <a name="resetIsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled"></a>

```typescript
public resetIsAccessControlServiceEnabled(): void
```

##### `resetIsInputOutputMemoryManagementUnitEnabled` <a name="resetIsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled"></a>

```typescript
public resetIsInputOutputMemoryManagementUnitEnabled(): void
```

##### `resetIsMeasuredBootEnabled` <a name="resetIsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled"></a>

```typescript
public resetIsMeasuredBootEnabled(): void
```

##### `resetIsMemoryEncryptionEnabled` <a name="resetIsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled"></a>

```typescript
public resetIsMemoryEncryptionEnabled(): void
```

##### `resetIsSecureBootEnabled` <a name="resetIsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled"></a>

```typescript
public resetIsSecureBootEnabled(): void
```

##### `resetIsSymmetricMultiThreadingEnabled` <a name="resetIsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled"></a>

```typescript
public resetIsSymmetricMultiThreadingEnabled(): void
```

##### `resetIsTrustedPlatformModuleEnabled` <a name="resetIsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled"></a>

```typescript
public resetIsTrustedPlatformModuleEnabled(): void
```

##### `resetNumaNodesPerSocket` <a name="resetNumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket"></a>

```typescript
public resetNumaNodesPerSocket(): void
```

##### `resetPercentageOfCoresEnabled` <a name="resetPercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled"></a>

```typescript
public resetPercentageOfCoresEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput">areVirtualInstructionsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput">configMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput">isAccessControlServiceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput">isInputOutputMemoryManagementUnitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput">isMeasuredBootEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput">isMemoryEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput">isSecureBootEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput">isSymmetricMultiThreadingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput">isTrustedPlatformModuleEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput">numaNodesPerSocketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput">percentageOfCoresEnabledInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled">areVirtualInstructionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap">configMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled">isAccessControlServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled">isInputOutputMemoryManagementUnitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled">isMeasuredBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled">isMemoryEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled">isSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled">isSymmetricMultiThreadingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled">isTrustedPlatformModuleEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket">numaNodesPerSocket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled">percentageOfCoresEnabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areVirtualInstructionsEnabledInput`<sup>Optional</sup> <a name="areVirtualInstructionsEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput"></a>

```typescript
public readonly areVirtualInstructionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configMapInput`<sup>Optional</sup> <a name="configMapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput"></a>

```typescript
public readonly configMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isAccessControlServiceEnabledInput`<sup>Optional</sup> <a name="isAccessControlServiceEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput"></a>

```typescript
public readonly isAccessControlServiceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isInputOutputMemoryManagementUnitEnabledInput`<sup>Optional</sup> <a name="isInputOutputMemoryManagementUnitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput"></a>

```typescript
public readonly isInputOutputMemoryManagementUnitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMeasuredBootEnabledInput`<sup>Optional</sup> <a name="isMeasuredBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput"></a>

```typescript
public readonly isMeasuredBootEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMemoryEncryptionEnabledInput`<sup>Optional</sup> <a name="isMemoryEncryptionEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput"></a>

```typescript
public readonly isMemoryEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecureBootEnabledInput`<sup>Optional</sup> <a name="isSecureBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput"></a>

```typescript
public readonly isSecureBootEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSymmetricMultiThreadingEnabledInput`<sup>Optional</sup> <a name="isSymmetricMultiThreadingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput"></a>

```typescript
public readonly isSymmetricMultiThreadingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTrustedPlatformModuleEnabledInput`<sup>Optional</sup> <a name="isTrustedPlatformModuleEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput"></a>

```typescript
public readonly isTrustedPlatformModuleEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numaNodesPerSocketInput`<sup>Optional</sup> <a name="numaNodesPerSocketInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput"></a>

```typescript
public readonly numaNodesPerSocketInput: string;
```

- *Type:* string

---

##### `percentageOfCoresEnabledInput`<sup>Optional</sup> <a name="percentageOfCoresEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput"></a>

```typescript
public readonly percentageOfCoresEnabledInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `areVirtualInstructionsEnabled`<sup>Required</sup> <a name="areVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled"></a>

```typescript
public readonly areVirtualInstructionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configMap`<sup>Required</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap"></a>

```typescript
public readonly configMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isAccessControlServiceEnabled`<sup>Required</sup> <a name="isAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled"></a>

```typescript
public readonly isAccessControlServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isInputOutputMemoryManagementUnitEnabled`<sup>Required</sup> <a name="isInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled"></a>

```typescript
public readonly isInputOutputMemoryManagementUnitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMeasuredBootEnabled`<sup>Required</sup> <a name="isMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled"></a>

```typescript
public readonly isMeasuredBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMemoryEncryptionEnabled`<sup>Required</sup> <a name="isMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled"></a>

```typescript
public readonly isMemoryEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecureBootEnabled`<sup>Required</sup> <a name="isSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled"></a>

```typescript
public readonly isSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSymmetricMultiThreadingEnabled`<sup>Required</sup> <a name="isSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled"></a>

```typescript
public readonly isSymmetricMultiThreadingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTrustedPlatformModuleEnabled`<sup>Required</sup> <a name="isTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled"></a>

```typescript
public readonly isTrustedPlatformModuleEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numaNodesPerSocket`<sup>Required</sup> <a name="numaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket"></a>

```typescript
public readonly numaNodesPerSocket: string;
```

- *Type:* string

---

##### `percentageOfCoresEnabled`<sup>Required</sup> <a name="percentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled"></a>

```typescript
public readonly percentageOfCoresEnabled: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstancePlatformConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---


### CoreInstancePreemptibleInstanceConfigOutputReference <a name="CoreInstancePreemptibleInstanceConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction">putPreemptionAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreemptionAction` <a name="putPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction"></a>

```typescript
public putPreemptionAction(value: CoreInstancePreemptibleInstanceConfigPreemptionAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput">preemptionActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction"></a>

```typescript
public readonly preemptionAction: CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a>

---

##### `preemptionActionInput`<sup>Optional</sup> <a name="preemptionActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput"></a>

```typescript
public readonly preemptionActionInput: CoreInstancePreemptibleInstanceConfigPreemptionAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstancePreemptibleInstanceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---


### CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference <a name="CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume">resetPreserveBootVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveBootVolume` <a name="resetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume"></a>

```typescript
public resetPreserveBootVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput">preserveBootVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume">preserveBootVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preserveBootVolumeInput`<sup>Optional</sup> <a name="preserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput"></a>

```typescript
public readonly preserveBootVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `preserveBootVolume`<sup>Required</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume"></a>

```typescript
public readonly preserveBootVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstancePreemptibleInstanceConfigPreemptionAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


### CoreInstanceShapeConfigOutputReference <a name="CoreInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization">resetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes">resetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus">resetVcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaselineOcpuUtilization` <a name="resetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```typescript
public resetBaselineOcpuUtilization(): void
```

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetNvmes` <a name="resetNvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes"></a>

```typescript
public resetNvmes(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```

##### `resetVcpus` <a name="resetVcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus"></a>

```typescript
public resetVcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription">gpuDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus">gpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription">localDiskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks">localDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs">localDisksTotalSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments">maxVnicAttachments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription">processorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput">baselineOcpuUtilizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput">nvmesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput">vcpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus">vcpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpuDescription`<sup>Required</sup> <a name="gpuDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription"></a>

```typescript
public readonly gpuDescription: string;
```

- *Type:* string

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus"></a>

```typescript
public readonly gpus: number;
```

- *Type:* number

---

##### `localDiskDescription`<sup>Required</sup> <a name="localDiskDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription"></a>

```typescript
public readonly localDiskDescription: string;
```

- *Type:* string

---

##### `localDisks`<sup>Required</sup> <a name="localDisks" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks"></a>

```typescript
public readonly localDisks: number;
```

- *Type:* number

---

##### `localDisksTotalSizeInGbs`<sup>Required</sup> <a name="localDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs"></a>

```typescript
public readonly localDisksTotalSizeInGbs: number;
```

- *Type:* number

---

##### `maxVnicAttachments`<sup>Required</sup> <a name="maxVnicAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments"></a>

```typescript
public readonly maxVnicAttachments: number;
```

- *Type:* number

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```typescript
public readonly networkingBandwidthInGbps: number;
```

- *Type:* number

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription"></a>

```typescript
public readonly processorDescription: string;
```

- *Type:* string

---

##### `baselineOcpuUtilizationInput`<sup>Optional</sup> <a name="baselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```typescript
public readonly baselineOcpuUtilizationInput: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `nvmesInput`<sup>Optional</sup> <a name="nvmesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput"></a>

```typescript
public readonly nvmesInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput"></a>

```typescript
public readonly vcpusInput: number;
```

- *Type:* number

---

##### `baselineOcpuUtilization`<sup>Required</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```typescript
public readonly baselineOcpuUtilization: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes"></a>

```typescript
public readonly nvmes: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---


### CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter">resetDefinedTagsFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion">resetOperatingSystemVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTagsFilter` <a name="resetDefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter"></a>

```typescript
public resetDefinedTagsFilter(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetOperatingSystemVersion` <a name="resetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion"></a>

```typescript
public resetOperatingSystemVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput">definedTagsFilterInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput">operatingSystemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter">definedTagsFilter</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsFilterInput`<sup>Optional</sup> <a name="definedTagsFilterInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput"></a>

```typescript
public readonly definedTagsFilterInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `operatingSystemVersionInput`<sup>Optional</sup> <a name="operatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput"></a>

```typescript
public readonly operatingSystemVersionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTagsFilter`<sup>Required</sup> <a name="definedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter"></a>

```typescript
public readonly definedTagsFilter: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion"></a>

```typescript
public readonly operatingSystemVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---


### CoreInstanceSourceDetailsOutputReference <a name="CoreInstanceSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails">putInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs">resetBootVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb">resetBootVolumeVpusPerGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails">resetInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled">resetIsPreserveBootVolumeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId">resetSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceSourceImageFilterDetails` <a name="putInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails"></a>

```typescript
public putInstanceSourceImageFilterDetails(value: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `resetBootVolumeSizeInGbs` <a name="resetBootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```typescript
public resetBootVolumeSizeInGbs(): void
```

##### `resetBootVolumeVpusPerGb` <a name="resetBootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb"></a>

```typescript
public resetBootVolumeVpusPerGb(): void
```

##### `resetInstanceSourceImageFilterDetails` <a name="resetInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails"></a>

```typescript
public resetInstanceSourceImageFilterDetails(): void
```

##### `resetIsPreserveBootVolumeEnabled` <a name="resetIsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled"></a>

```typescript
public resetIsPreserveBootVolumeEnabled(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId"></a>

```typescript
public resetSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails">instanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">bootVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput">bootVolumeVpusPerGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput">instanceSourceImageFilterDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput">isPreserveBootVolumeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb">bootVolumeVpusPerGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled">isPreserveBootVolumeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceSourceImageFilterDetails`<sup>Required</sup> <a name="instanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails"></a>

```typescript
public readonly instanceSourceImageFilterDetails: CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a>

---

##### `bootVolumeSizeInGbsInput`<sup>Optional</sup> <a name="bootVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```typescript
public readonly bootVolumeSizeInGbsInput: string;
```

- *Type:* string

---

##### `bootVolumeVpusPerGbInput`<sup>Optional</sup> <a name="bootVolumeVpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput"></a>

```typescript
public readonly bootVolumeVpusPerGbInput: string;
```

- *Type:* string

---

##### `instanceSourceImageFilterDetailsInput`<sup>Optional</sup> <a name="instanceSourceImageFilterDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput"></a>

```typescript
public readonly instanceSourceImageFilterDetailsInput: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `isPreserveBootVolumeEnabledInput`<sup>Optional</sup> <a name="isPreserveBootVolumeEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput"></a>

```typescript
public readonly isPreserveBootVolumeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `bootVolumeSizeInGbs`<sup>Required</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```typescript
public readonly bootVolumeSizeInGbs: string;
```

- *Type:* string

---

##### `bootVolumeVpusPerGb`<sup>Required</sup> <a name="bootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb"></a>

```typescript
public readonly bootVolumeVpusPerGb: string;
```

- *Type:* string

---

##### `isPreserveBootVolumeEnabled`<sup>Required</sup> <a name="isPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled"></a>

```typescript
public readonly isPreserveBootVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreInstanceSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---


### CoreInstanceTimeoutsOutputReference <a name="CoreInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreInstance } from 'rhizo-co-terraform-provider-oci'

new coreInstance.CoreInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---



