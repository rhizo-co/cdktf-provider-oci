# `ocvpEsxiHost` Submodule <a name="`ocvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpEsxiHost <a name="OcvpEsxiHost" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

new ocvpEsxiHost.OcvpEsxiHost(scope: Construct, id: string, config?: OcvpEsxiHostConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig">OcvpEsxiHostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig">OcvpEsxiHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId">resetBillingDonorHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain">resetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku">resetCurrentSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion">resetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId">resetFailedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount">resetHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName">resetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku">resetNextSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId">resetNonUpgradedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId">resetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts"></a>

```typescript
public putTimeouts(value: OcvpEsxiHostTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---

##### `resetBillingDonorHostId` <a name="resetBillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId"></a>

```typescript
public resetBillingDonorHostId(): void
```

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetComputeAvailabilityDomain` <a name="resetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain"></a>

```typescript
public resetComputeAvailabilityDomain(): void
```

##### `resetCurrentSku` <a name="resetCurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku"></a>

```typescript
public resetCurrentSku(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEsxiSoftwareVersion` <a name="resetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion"></a>

```typescript
public resetEsxiSoftwareVersion(): void
```

##### `resetFailedEsxiHostId` <a name="resetFailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId"></a>

```typescript
public resetFailedEsxiHostId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostOcpuCount` <a name="resetHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount"></a>

```typescript
public resetHostOcpuCount(): void
```

##### `resetHostShapeName` <a name="resetHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName"></a>

```typescript
public resetHostShapeName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNextSku` <a name="resetNextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku"></a>

```typescript
public resetNextSku(): void
```

##### `resetNonUpgradedEsxiHostId` <a name="resetNonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId"></a>

```typescript
public resetNonUpgradedEsxiHostId(): void
```

##### `resetSddcId` <a name="resetSddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId"></a>

```typescript
public resetSddcId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

ocvpEsxiHost.OcvpEsxiHost.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

ocvpEsxiHost.OcvpEsxiHost.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

ocvpEsxiHost.OcvpEsxiHost.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OcvpEsxiHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate">billingContractEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId">computeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment">currentCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate">gracePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress">isBillingContinuationInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress">isBillingSwappingInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment">nextCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId">replacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId">swapBillingHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId">upgradedReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput">billingDonorHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput">currentSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput">esxiSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput">failedEsxiHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput">hostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput">hostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput">nextSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput">nonUpgradedEsxiHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput">sddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId">billingDonorHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku">currentSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId">failedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount">hostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName">hostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku">nextSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId">sddcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingContractEndDate`<sup>Required</sup> <a name="billingContractEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate"></a>

```typescript
public readonly billingContractEndDate: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeInstanceId`<sup>Required</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId"></a>

```typescript
public readonly computeInstanceId: string;
```

- *Type:* string

---

##### `currentCommitment`<sup>Required</sup> <a name="currentCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment"></a>

```typescript
public readonly currentCommitment: string;
```

- *Type:* string

---

##### `gracePeriodEndDate`<sup>Required</sup> <a name="gracePeriodEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate"></a>

```typescript
public readonly gracePeriodEndDate: string;
```

- *Type:* string

---

##### `isBillingContinuationInProgress`<sup>Required</sup> <a name="isBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```typescript
public readonly isBillingContinuationInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBillingSwappingInProgress`<sup>Required</sup> <a name="isBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```typescript
public readonly isBillingSwappingInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nextCommitment`<sup>Required</sup> <a name="nextCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment"></a>

```typescript
public readonly nextCommitment: string;
```

- *Type:* string

---

##### `replacementEsxiHostId`<sup>Required</sup> <a name="replacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId"></a>

```typescript
public readonly replacementEsxiHostId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `swapBillingHostId`<sup>Required</sup> <a name="swapBillingHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId"></a>

```typescript
public readonly swapBillingHostId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts"></a>

```typescript
public readonly timeouts: OcvpEsxiHostTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradedReplacementEsxiHostId`<sup>Required</sup> <a name="upgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```typescript
public readonly upgradedReplacementEsxiHostId: string;
```

- *Type:* string

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

---

##### `billingDonorHostIdInput`<sup>Optional</sup> <a name="billingDonorHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput"></a>

```typescript
public readonly billingDonorHostIdInput: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput"></a>

```typescript
public readonly computeAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `currentSkuInput`<sup>Optional</sup> <a name="currentSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput"></a>

```typescript
public readonly currentSkuInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `esxiSoftwareVersionInput`<sup>Optional</sup> <a name="esxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput"></a>

```typescript
public readonly esxiSoftwareVersionInput: string;
```

- *Type:* string

---

##### `failedEsxiHostIdInput`<sup>Optional</sup> <a name="failedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput"></a>

```typescript
public readonly failedEsxiHostIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostOcpuCountInput`<sup>Optional</sup> <a name="hostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput"></a>

```typescript
public readonly hostOcpuCountInput: number;
```

- *Type:* number

---

##### `hostShapeNameInput`<sup>Optional</sup> <a name="hostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput"></a>

```typescript
public readonly hostShapeNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nextSkuInput`<sup>Optional</sup> <a name="nextSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput"></a>

```typescript
public readonly nextSkuInput: string;
```

- *Type:* string

---

##### `nonUpgradedEsxiHostIdInput`<sup>Optional</sup> <a name="nonUpgradedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput"></a>

```typescript
public readonly nonUpgradedEsxiHostIdInput: string;
```

- *Type:* string

---

##### `sddcIdInput`<sup>Optional</sup> <a name="sddcIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput"></a>

```typescript
public readonly sddcIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OcvpEsxiHostTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---

##### `billingDonorHostId`<sup>Required</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId"></a>

```typescript
public readonly billingDonorHostId: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `currentSku`<sup>Required</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku"></a>

```typescript
public readonly currentSku: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

---

##### `failedEsxiHostId`<sup>Required</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId"></a>

```typescript
public readonly failedEsxiHostId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostOcpuCount`<sup>Required</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount"></a>

```typescript
public readonly hostOcpuCount: number;
```

- *Type:* number

---

##### `hostShapeName`<sup>Required</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName"></a>

```typescript
public readonly hostShapeName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nextSku`<sup>Required</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku"></a>

```typescript
public readonly nextSku: string;
```

- *Type:* string

---

##### `nonUpgradedEsxiHostId`<sup>Required</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```typescript
public readonly nonUpgradedEsxiHostId: string;
```

- *Type:* string

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpEsxiHostConfig <a name="OcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.Initializer"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

const ocvpEsxiHostConfig: ocvpEsxiHost.OcvpEsxiHostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId">billingDonorHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku">currentSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId">failedEsxiHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount">hostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName">hostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku">nextSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId">sddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingDonorHostId`<sup>Optional</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId"></a>

```typescript
public readonly billingDonorHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `currentSku`<sup>Optional</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku"></a>

```typescript
public readonly currentSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `failedEsxiHostId`<sup>Optional</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId"></a>

```typescript
public readonly failedEsxiHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `hostOcpuCount`<sup>Optional</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount"></a>

```typescript
public readonly hostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `hostShapeName`<sup>Optional</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName"></a>

```typescript
public readonly hostShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nextSku`<sup>Optional</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku"></a>

```typescript
public readonly nextSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `nonUpgradedEsxiHostId`<sup>Optional</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId"></a>

```typescript
public readonly nonUpgradedEsxiHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `sddcId`<sup>Optional</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OcvpEsxiHostTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

### OcvpEsxiHostTimeouts <a name="OcvpEsxiHostTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.Initializer"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

const ocvpEsxiHostTimeouts: ocvpEsxiHost.OcvpEsxiHostTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OcvpEsxiHostTimeoutsOutputReference <a name="OcvpEsxiHostTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer"></a>

```typescript
import { ocvpEsxiHost } from 'rhizo-co-terraform-provider-oci'

new ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpEsxiHostTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---



