# `ocvpSddc` Submodule <a name="`ocvpSddc` Submodule" id="rhizo-co-terraform-provider-oci.ocvpSddc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpSddc <a name="OcvpSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc oci_ocvp_sddc}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddc(scope: Construct, id: string, config: OcvpSddcConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig">OcvpSddcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig">OcvpSddcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores">putDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration">putInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain">resetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores">resetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount">resetEsxiHostsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion">resetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction">resetHcxAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId">resetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration">resetInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount">resetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName">resetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku">resetInitialSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix">resetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled">resetIsHcxEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled">resetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc">resetIsSingleHostSddc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId">resetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId">resetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId">resetNsxEdgeVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId">resetNsxVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId">resetProvisioningSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId">resetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus">resetRefreshHcxLicenseStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId">resetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys">resetReservingHcxOnPremiseLicenseKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId">resetVmotionVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId">resetVsanVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId">resetVsphereVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr">resetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastores` <a name="putDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores"></a>

```typescript
public putDatastores(value: IResolvable | OcvpSddcDatastores[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]

---

##### `putInitialConfiguration` <a name="putInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration"></a>

```typescript
public putInitialConfiguration(value: IResolvable | OcvpSddcInitialConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts"></a>

```typescript
public putTimeouts(value: OcvpSddcTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetComputeAvailabilityDomain` <a name="resetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain"></a>

```typescript
public resetComputeAvailabilityDomain(): void
```

##### `resetDatastores` <a name="resetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores"></a>

```typescript
public resetDatastores(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEsxiHostsCount` <a name="resetEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount"></a>

```typescript
public resetEsxiHostsCount(): void
```

##### `resetEsxiSoftwareVersion` <a name="resetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion"></a>

```typescript
public resetEsxiSoftwareVersion(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHcxAction` <a name="resetHcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction"></a>

```typescript
public resetHcxAction(): void
```

##### `resetHcxVlanId` <a name="resetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId"></a>

```typescript
public resetHcxVlanId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialConfiguration` <a name="resetInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration"></a>

```typescript
public resetInitialConfiguration(): void
```

##### `resetInitialHostOcpuCount` <a name="resetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount"></a>

```typescript
public resetInitialHostOcpuCount(): void
```

##### `resetInitialHostShapeName` <a name="resetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName"></a>

```typescript
public resetInitialHostShapeName(): void
```

##### `resetInitialSku` <a name="resetInitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku"></a>

```typescript
public resetInitialSku(): void
```

##### `resetInstanceDisplayNamePrefix` <a name="resetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix"></a>

```typescript
public resetInstanceDisplayNamePrefix(): void
```

##### `resetIsHcxEnabled` <a name="resetIsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled"></a>

```typescript
public resetIsHcxEnabled(): void
```

##### `resetIsShieldedInstanceEnabled` <a name="resetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled"></a>

```typescript
public resetIsShieldedInstanceEnabled(): void
```

##### `resetIsSingleHostSddc` <a name="resetIsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc"></a>

```typescript
public resetIsSingleHostSddc(): void
```

##### `resetNsxEdgeUplink1VlanId` <a name="resetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId"></a>

```typescript
public resetNsxEdgeUplink1VlanId(): void
```

##### `resetNsxEdgeUplink2VlanId` <a name="resetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId"></a>

```typescript
public resetNsxEdgeUplink2VlanId(): void
```

##### `resetNsxEdgeVtepVlanId` <a name="resetNsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId"></a>

```typescript
public resetNsxEdgeVtepVlanId(): void
```

##### `resetNsxVtepVlanId` <a name="resetNsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId"></a>

```typescript
public resetNsxVtepVlanId(): void
```

##### `resetProvisioningSubnetId` <a name="resetProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId"></a>

```typescript
public resetProvisioningSubnetId(): void
```

##### `resetProvisioningVlanId` <a name="resetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId"></a>

```typescript
public resetProvisioningVlanId(): void
```

##### `resetRefreshHcxLicenseStatus` <a name="resetRefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus"></a>

```typescript
public resetRefreshHcxLicenseStatus(): void
```

##### `resetReplicationVlanId` <a name="resetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId"></a>

```typescript
public resetReplicationVlanId(): void
```

##### `resetReservingHcxOnPremiseLicenseKeys` <a name="resetReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys"></a>

```typescript
public resetReservingHcxOnPremiseLicenseKeys(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmotionVlanId` <a name="resetVmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId"></a>

```typescript
public resetVmotionVlanId(): void
```

##### `resetVsanVlanId` <a name="resetVsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId"></a>

```typescript
public resetVsanVlanId(): void
```

##### `resetVsphereVlanId` <a name="resetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId"></a>

```typescript
public resetVsphereVlanId(): void
```

##### `resetWorkloadNetworkCidr` <a name="resetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr"></a>

```typescript
public resetWorkloadNetworkCidr(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

ocvpSddc.OcvpSddc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

ocvpSddc.OcvpSddc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

ocvpSddc.OcvpSddc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

ocvpSddc.OcvpSddc.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OcvpSddc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OcvpSddc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OcvpSddc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount">clustersCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn">hcxFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword">hcxInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode">hcxMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey">hcxOnPremKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses">hcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId">hcxPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration">initialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled">isHcxEnterpriseEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade">isHcxPendingDowngrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId">nsxEdgeUplinkIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn">nsxManagerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword">nsxManagerInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId">nsxManagerPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername">nsxManagerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName">nsxOverlaySegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd">timeHcxBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated">timeHcxLicenseStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses">upgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn">vcenterFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword">vcenterInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId">vcenterPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername">vcenterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide">vsphereUpgradeGuide</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects">vsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput">datastoresInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput">esxiHostsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput">esxiSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput">hcxActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput">hcxVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput">initialConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput">initialHostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput">initialHostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput">initialSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput">instanceDisplayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput">isHcxEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput">isShieldedInstanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput">isSingleHostSddcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput">nsxEdgeUplink1VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput">nsxEdgeUplink2VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput">nsxEdgeVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput">nsxVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput">provisioningSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput">provisioningVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput">refreshHcxLicenseStatusInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput">replicationVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput">reservingHcxOnPremiseLicenseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput">sshAuthorizedKeysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput">vmotionVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput">vmwareSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput">vsanVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput">vsphereVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput">workloadNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction">hcxAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku">initialSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled">isHcxEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc">isSingleHostSddc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount"></a>

```typescript
public readonly actualEsxiHostsCount: number;
```

- *Type:* number

---

##### `clustersCount`<sup>Required</sup> <a name="clustersCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount"></a>

```typescript
public readonly clustersCount: number;
```

- *Type:* number

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores"></a>

```typescript
public readonly datastores: OcvpSddcDatastoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a>

---

##### `hcxFqdn`<sup>Required</sup> <a name="hcxFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn"></a>

```typescript
public readonly hcxFqdn: string;
```

- *Type:* string

---

##### `hcxInitialPassword`<sup>Required</sup> <a name="hcxInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword"></a>

```typescript
public readonly hcxInitialPassword: string;
```

- *Type:* string

---

##### `hcxMode`<sup>Required</sup> <a name="hcxMode" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode"></a>

```typescript
public readonly hcxMode: string;
```

- *Type:* string

---

##### `hcxOnPremKey`<sup>Required</sup> <a name="hcxOnPremKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey"></a>

```typescript
public readonly hcxOnPremKey: string;
```

- *Type:* string

---

##### `hcxOnPremLicenses`<sup>Required</sup> <a name="hcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses"></a>

```typescript
public readonly hcxOnPremLicenses: OcvpSddcHcxOnPremLicensesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a>

---

##### `hcxPrivateIpId`<sup>Required</sup> <a name="hcxPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId"></a>

```typescript
public readonly hcxPrivateIpId: string;
```

- *Type:* string

---

##### `initialConfiguration`<sup>Required</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration"></a>

```typescript
public readonly initialConfiguration: OcvpSddcInitialConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a>

---

##### `isHcxEnterpriseEnabled`<sup>Required</sup> <a name="isHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled"></a>

```typescript
public readonly isHcxEnterpriseEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHcxPendingDowngrade`<sup>Required</sup> <a name="isHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade"></a>

```typescript
public readonly isHcxPendingDowngrade: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nsxEdgeUplinkIpId`<sup>Required</sup> <a name="nsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId"></a>

```typescript
public readonly nsxEdgeUplinkIpId: string;
```

- *Type:* string

---

##### `nsxManagerFqdn`<sup>Required</sup> <a name="nsxManagerFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn"></a>

```typescript
public readonly nsxManagerFqdn: string;
```

- *Type:* string

---

##### `nsxManagerInitialPassword`<sup>Required</sup> <a name="nsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword"></a>

```typescript
public readonly nsxManagerInitialPassword: string;
```

- *Type:* string

---

##### `nsxManagerPrivateIpId`<sup>Required</sup> <a name="nsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId"></a>

```typescript
public readonly nsxManagerPrivateIpId: string;
```

- *Type:* string

---

##### `nsxManagerUsername`<sup>Required</sup> <a name="nsxManagerUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername"></a>

```typescript
public readonly nsxManagerUsername: string;
```

- *Type:* string

---

##### `nsxOverlaySegmentName`<sup>Required</sup> <a name="nsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName"></a>

```typescript
public readonly nsxOverlaySegmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeHcxBillingCycleEnd`<sup>Required</sup> <a name="timeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd"></a>

```typescript
public readonly timeHcxBillingCycleEnd: string;
```

- *Type:* string

---

##### `timeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="timeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated"></a>

```typescript
public readonly timeHcxLicenseStatusUpdated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts"></a>

```typescript
public readonly timeouts: OcvpSddcTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradeLicenses`<sup>Required</sup> <a name="upgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses"></a>

```typescript
public readonly upgradeLicenses: OcvpSddcUpgradeLicensesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a>

---

##### `vcenterFqdn`<sup>Required</sup> <a name="vcenterFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn"></a>

```typescript
public readonly vcenterFqdn: string;
```

- *Type:* string

---

##### `vcenterInitialPassword`<sup>Required</sup> <a name="vcenterInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword"></a>

```typescript
public readonly vcenterInitialPassword: string;
```

- *Type:* string

---

##### `vcenterPrivateIpId`<sup>Required</sup> <a name="vcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId"></a>

```typescript
public readonly vcenterPrivateIpId: string;
```

- *Type:* string

---

##### `vcenterUsername`<sup>Required</sup> <a name="vcenterUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername"></a>

```typescript
public readonly vcenterUsername: string;
```

- *Type:* string

---

##### `vsphereUpgradeGuide`<sup>Required</sup> <a name="vsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide"></a>

```typescript
public readonly vsphereUpgradeGuide: string;
```

- *Type:* string

---

##### `vsphereUpgradeObjects`<sup>Required</sup> <a name="vsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects"></a>

```typescript
public readonly vsphereUpgradeObjects: OcvpSddcVsphereUpgradeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a>

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput"></a>

```typescript
public readonly computeAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `datastoresInput`<sup>Optional</sup> <a name="datastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput"></a>

```typescript
public readonly datastoresInput: IResolvable | OcvpSddcDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `esxiHostsCountInput`<sup>Optional</sup> <a name="esxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput"></a>

```typescript
public readonly esxiHostsCountInput: number;
```

- *Type:* number

---

##### `esxiSoftwareVersionInput`<sup>Optional</sup> <a name="esxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput"></a>

```typescript
public readonly esxiSoftwareVersionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hcxActionInput`<sup>Optional</sup> <a name="hcxActionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput"></a>

```typescript
public readonly hcxActionInput: string;
```

- *Type:* string

---

##### `hcxVlanIdInput`<sup>Optional</sup> <a name="hcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput"></a>

```typescript
public readonly hcxVlanIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialConfigurationInput`<sup>Optional</sup> <a name="initialConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput"></a>

```typescript
public readonly initialConfigurationInput: IResolvable | OcvpSddcInitialConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]

---

##### `initialHostOcpuCountInput`<sup>Optional</sup> <a name="initialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput"></a>

```typescript
public readonly initialHostOcpuCountInput: number;
```

- *Type:* number

---

##### `initialHostShapeNameInput`<sup>Optional</sup> <a name="initialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput"></a>

```typescript
public readonly initialHostShapeNameInput: string;
```

- *Type:* string

---

##### `initialSkuInput`<sup>Optional</sup> <a name="initialSkuInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput"></a>

```typescript
public readonly initialSkuInput: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="instanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput"></a>

```typescript
public readonly instanceDisplayNamePrefixInput: string;
```

- *Type:* string

---

##### `isHcxEnabledInput`<sup>Optional</sup> <a name="isHcxEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput"></a>

```typescript
public readonly isHcxEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="isShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput"></a>

```typescript
public readonly isShieldedInstanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSingleHostSddcInput`<sup>Optional</sup> <a name="isSingleHostSddcInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput"></a>

```typescript
public readonly isSingleHostSddcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput"></a>

```typescript
public readonly nsxEdgeUplink1VlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput"></a>

```typescript
public readonly nsxEdgeUplink2VlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="nsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput"></a>

```typescript
public readonly nsxEdgeVtepVlanIdInput: string;
```

- *Type:* string

---

##### `nsxVtepVlanIdInput`<sup>Optional</sup> <a name="nsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput"></a>

```typescript
public readonly nsxVtepVlanIdInput: string;
```

- *Type:* string

---

##### `provisioningSubnetIdInput`<sup>Optional</sup> <a name="provisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput"></a>

```typescript
public readonly provisioningSubnetIdInput: string;
```

- *Type:* string

---

##### `provisioningVlanIdInput`<sup>Optional</sup> <a name="provisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput"></a>

```typescript
public readonly provisioningVlanIdInput: string;
```

- *Type:* string

---

##### `refreshHcxLicenseStatusInput`<sup>Optional</sup> <a name="refreshHcxLicenseStatusInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput"></a>

```typescript
public readonly refreshHcxLicenseStatusInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationVlanIdInput`<sup>Optional</sup> <a name="replicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput"></a>

```typescript
public readonly replicationVlanIdInput: string;
```

- *Type:* string

---

##### `reservingHcxOnPremiseLicenseKeysInput`<sup>Optional</sup> <a name="reservingHcxOnPremiseLicenseKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput"></a>

```typescript
public readonly reservingHcxOnPremiseLicenseKeysInput: string[];
```

- *Type:* string[]

---

##### `sshAuthorizedKeysInput`<sup>Optional</sup> <a name="sshAuthorizedKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput"></a>

```typescript
public readonly sshAuthorizedKeysInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OcvpSddcTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---

##### `vmotionVlanIdInput`<sup>Optional</sup> <a name="vmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput"></a>

```typescript
public readonly vmotionVlanIdInput: string;
```

- *Type:* string

---

##### `vmwareSoftwareVersionInput`<sup>Optional</sup> <a name="vmwareSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput"></a>

```typescript
public readonly vmwareSoftwareVersionInput: string;
```

- *Type:* string

---

##### `vsanVlanIdInput`<sup>Optional</sup> <a name="vsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput"></a>

```typescript
public readonly vsanVlanIdInput: string;
```

- *Type:* string

---

##### `vsphereVlanIdInput`<sup>Optional</sup> <a name="vsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput"></a>

```typescript
public readonly vsphereVlanIdInput: string;
```

- *Type:* string

---

##### `workloadNetworkCidrInput`<sup>Optional</sup> <a name="workloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput"></a>

```typescript
public readonly workloadNetworkCidrInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hcxAction`<sup>Required</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction"></a>

```typescript
public readonly hcxAction: string;
```

- *Type:* string

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

---

##### `initialSku`<sup>Required</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku"></a>

```typescript
public readonly initialSku: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

---

##### `isHcxEnabled`<sup>Required</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled"></a>

```typescript
public readonly isHcxEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSingleHostSddc`<sup>Required</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc"></a>

```typescript
public readonly isSingleHostSddc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

---

##### `refreshHcxLicenseStatus`<sup>Required</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus"></a>

```typescript
public readonly refreshHcxLicenseStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys"></a>

```typescript
public readonly reservingHcxOnPremiseLicenseKeys: string[];
```

- *Type:* string[]

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys"></a>

```typescript
public readonly sshAuthorizedKeys: string;
```

- *Type:* string

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpSddcConfig <a name="OcvpSddcConfig" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcConfig: ocvpSddc.OcvpSddcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores">datastores</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction">hcxAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration">initialConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]</code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku">initialSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled">isHcxEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc">isSingleHostSddc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys"></a>

```typescript
public readonly sshAuthorizedKeys: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores"></a>

```typescript
public readonly datastores: IResolvable | OcvpSddcDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `esxiHostsCount`<sup>Optional</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `hcxAction`<sup>Optional</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction"></a>

```typescript
public readonly hcxAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `hcxVlanId`<sup>Optional</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfiguration`<sup>Optional</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration"></a>

```typescript
public readonly initialConfiguration: IResolvable | OcvpSddcInitialConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `initialHostOcpuCount`<sup>Optional</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initialHostShapeName`<sup>Optional</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `initialSku`<sup>Optional</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku"></a>

```typescript
public readonly initialSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `instanceDisplayNamePrefix`<sup>Optional</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `isHcxEnabled`<sup>Optional</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled"></a>

```typescript
public readonly isHcxEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `isShieldedInstanceEnabled`<sup>Optional</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `isSingleHostSddc`<sup>Optional</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc"></a>

```typescript
public readonly isSingleHostSddc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `nsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `nsxEdgeVtepVlanId`<sup>Optional</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsxVtepVlanId`<sup>Optional</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioningSubnetId`<sup>Optional</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `provisioningVlanId`<sup>Optional</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `refreshHcxLicenseStatus`<sup>Optional</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus"></a>

```typescript
public readonly refreshHcxLicenseStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `replicationVlanId`<sup>Optional</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Optional</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys"></a>

```typescript
public readonly reservingHcxOnPremiseLicenseKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OcvpSddcTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `vmotionVlanId`<sup>Optional</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsanVlanId`<sup>Optional</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `vsphereVlanId`<sup>Optional</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `workloadNetworkCidr`<sup>Optional</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcDatastores <a name="OcvpSddcDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcDatastores: ocvpSddc.OcvpSddcDatastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType">datastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcHcxOnPremLicenses <a name="OcvpSddcHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcHcxOnPremLicenses: ocvpSddc.OcvpSddcHcxOnPremLicenses = { ... }
```


### OcvpSddcInitialConfiguration <a name="OcvpSddcInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcInitialConfiguration: ocvpSddc.OcvpSddcInitialConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations">initialClusterConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]</code> | initial_cluster_configurations block. |

---

##### `initialClusterConfigurations`<sup>Required</sup> <a name="initialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations"></a>

```typescript
public readonly initialClusterConfigurations: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]

initial_cluster_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_cluster_configurations OcvpSddc#initial_cluster_configurations}

---

### OcvpSddcInitialConfigurationInitialClusterConfigurations <a name="OcvpSddcInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcInitialConfigurationInitialClusterConfigurations: ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType">vsphereType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores">datastores</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment">initialCommitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType"></a>

```typescript
public readonly vsphereType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores"></a>

```typescript
public readonly datastores: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `initialCommitment`<sup>Optional</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment"></a>

```typescript
public readonly initialCommitment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}.

---

##### `initialHostOcpuCount`<sup>Optional</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initialHostShapeName`<sup>Optional</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `instanceDisplayNamePrefix`<sup>Optional</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `isShieldedInstanceEnabled`<sup>Optional</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#network_configuration OcvpSddc#network_configuration}

---

##### `workloadNetworkCidr`<sup>Optional</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcInitialConfigurationInitialClusterConfigurationsDatastores: ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType">datastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration: ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `hcxVlanId`<sup>Optional</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `nsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `provisioningVlanId`<sup>Optional</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `replicationVlanId`<sup>Optional</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `vsphereVlanId`<sup>Optional</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

### OcvpSddcTimeouts <a name="OcvpSddcTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcTimeouts: ocvpSddc.OcvpSddcTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}.

---

### OcvpSddcUpgradeLicenses <a name="OcvpSddcUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcUpgradeLicenses: ocvpSddc.OcvpSddcUpgradeLicenses = { ... }
```


### OcvpSddcVsphereUpgradeObjects <a name="OcvpSddcVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

const ocvpSddcVsphereUpgradeObjects: ocvpSddc.OcvpSddcVsphereUpgradeObjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpSddcDatastoresList <a name="OcvpSddcDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcDatastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get"></a>

```typescript
public get(index: number): OcvpSddcDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>[]

---


### OcvpSddcDatastoresOutputReference <a name="OcvpSddcDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcDatastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput">blockVolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput">datastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `blockVolumeIdsInput`<sup>Optional</sup> <a name="blockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```typescript
public readonly blockVolumeIdsInput: string[];
```

- *Type:* string[]

---

##### `datastoreTypeInput`<sup>Optional</sup> <a name="datastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput"></a>

```typescript
public readonly datastoreTypeInput: string;
```

- *Type:* string

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcDatastores;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>

---


### OcvpSddcHcxOnPremLicensesList <a name="OcvpSddcHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcHcxOnPremLicensesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get"></a>

```typescript
public get(index: number): OcvpSddcHcxOnPremLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OcvpSddcHcxOnPremLicensesOutputReference <a name="OcvpSddcHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey">activationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName">systemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName"></a>

```typescript
public readonly systemName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpSddcHcxOnPremLicenses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```typescript
public get(index: number): OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput">blockVolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput">datastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockVolumeIdsInput`<sup>Optional</sup> <a name="blockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```typescript
public readonly blockVolumeIdsInput: string[];
```

- *Type:* string[]

---

##### `datastoreTypeInput`<sup>Optional</sup> <a name="datastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput"></a>

```typescript
public readonly datastoreTypeInput: string;
```

- *Type:* string

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get"></a>

```typescript
public get(index: number): OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId">resetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">resetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">resetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId">resetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId">resetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId">resetVsphereVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHcxVlanId` <a name="resetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```typescript
public resetHcxVlanId(): void
```

##### `resetNsxEdgeUplink1VlanId` <a name="resetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```typescript
public resetNsxEdgeUplink1VlanId(): void
```

##### `resetNsxEdgeUplink2VlanId` <a name="resetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```typescript
public resetNsxEdgeUplink2VlanId(): void
```

##### `resetProvisioningVlanId` <a name="resetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```typescript
public resetProvisioningVlanId(): void
```

##### `resetReplicationVlanId` <a name="resetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```typescript
public resetReplicationVlanId(): void
```

##### `resetVsphereVlanId` <a name="resetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```typescript
public resetVsphereVlanId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput">hcxVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">nsxEdgeUplink1VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">nsxEdgeUplink2VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">nsxEdgeVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">nsxVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">provisioningSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput">provisioningVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput">replicationVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput">vmotionVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput">vsanVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput">vsphereVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hcxVlanIdInput`<sup>Optional</sup> <a name="hcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```typescript
public readonly hcxVlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```typescript
public readonly nsxEdgeUplink1VlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```typescript
public readonly nsxEdgeUplink2VlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="nsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```typescript
public readonly nsxEdgeVtepVlanIdInput: string;
```

- *Type:* string

---

##### `nsxVtepVlanIdInput`<sup>Optional</sup> <a name="nsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```typescript
public readonly nsxVtepVlanIdInput: string;
```

- *Type:* string

---

##### `provisioningSubnetIdInput`<sup>Optional</sup> <a name="provisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```typescript
public readonly provisioningSubnetIdInput: string;
```

- *Type:* string

---

##### `provisioningVlanIdInput`<sup>Optional</sup> <a name="provisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```typescript
public readonly provisioningVlanIdInput: string;
```

- *Type:* string

---

##### `replicationVlanIdInput`<sup>Optional</sup> <a name="replicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```typescript
public readonly replicationVlanIdInput: string;
```

- *Type:* string

---

##### `vmotionVlanIdInput`<sup>Optional</sup> <a name="vmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```typescript
public readonly vmotionVlanIdInput: string;
```

- *Type:* string

---

##### `vsanVlanIdInput`<sup>Optional</sup> <a name="vsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```typescript
public readonly vsanVlanIdInput: string;
```

- *Type:* string

---

##### `vsphereVlanIdInput`<sup>Optional</sup> <a name="vsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```typescript
public readonly vsphereVlanIdInput: string;
```

- *Type:* string

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores">putDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores">resetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment">resetInitialCommitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount">resetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName">resetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix">resetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled">resetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr">resetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatastores` <a name="putDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores"></a>

```typescript
public putDatastores(value: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetDatastores` <a name="resetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores"></a>

```typescript
public resetDatastores(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetInitialCommitment` <a name="resetInitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment"></a>

```typescript
public resetInitialCommitment(): void
```

##### `resetInitialHostOcpuCount` <a name="resetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount"></a>

```typescript
public resetInitialHostOcpuCount(): void
```

##### `resetInitialHostShapeName` <a name="resetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName"></a>

```typescript
public resetInitialHostShapeName(): void
```

##### `resetInstanceDisplayNamePrefix` <a name="resetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix"></a>

```typescript
public resetInstanceDisplayNamePrefix(): void
```

##### `resetIsShieldedInstanceEnabled` <a name="resetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled"></a>

```typescript
public resetIsShieldedInstanceEnabled(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetWorkloadNetworkCidr` <a name="resetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr"></a>

```typescript
public resetWorkloadNetworkCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput">datastoresInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput">esxiHostsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput">initialCommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput">initialHostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput">initialHostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput">instanceDisplayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput">isShieldedInstanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput">vsphereTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput">workloadNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">initialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">vsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```typescript
public readonly actualEsxiHostsCount: number;
```

- *Type:* number

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```typescript
public readonly datastores: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a>

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput"></a>

```typescript
public readonly computeAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `datastoresInput`<sup>Optional</sup> <a name="datastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput"></a>

```typescript
public readonly datastoresInput: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `esxiHostsCountInput`<sup>Optional</sup> <a name="esxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput"></a>

```typescript
public readonly esxiHostsCountInput: number;
```

- *Type:* number

---

##### `initialCommitmentInput`<sup>Optional</sup> <a name="initialCommitmentInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput"></a>

```typescript
public readonly initialCommitmentInput: string;
```

- *Type:* string

---

##### `initialHostOcpuCountInput`<sup>Optional</sup> <a name="initialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput"></a>

```typescript
public readonly initialHostOcpuCountInput: number;
```

- *Type:* number

---

##### `initialHostShapeNameInput`<sup>Optional</sup> <a name="initialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput"></a>

```typescript
public readonly initialHostShapeNameInput: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="instanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput"></a>

```typescript
public readonly instanceDisplayNamePrefixInput: string;
```

- *Type:* string

---

##### `isShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="isShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput"></a>

```typescript
public readonly isShieldedInstanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `vsphereTypeInput`<sup>Optional</sup> <a name="vsphereTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput"></a>

```typescript
public readonly vsphereTypeInput: string;
```

- *Type:* string

---

##### `workloadNetworkCidrInput`<sup>Optional</sup> <a name="workloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput"></a>

```typescript
public readonly workloadNetworkCidrInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

---

##### `initialCommitment`<sup>Required</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```typescript
public readonly initialCommitment: string;
```

- *Type:* string

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```typescript
public readonly vsphereType: string;
```

- *Type:* string

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>

---


### OcvpSddcInitialConfigurationList <a name="OcvpSddcInitialConfigurationList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get"></a>

```typescript
public get(index: number): OcvpSddcInitialConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcInitialConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>[]

---


### OcvpSddcInitialConfigurationOutputReference <a name="OcvpSddcInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcInitialConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations">putInitialClusterConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitialClusterConfigurations` <a name="putInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations"></a>

```typescript
public putInitialClusterConfigurations(value: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations">initialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput">initialClusterConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialClusterConfigurations`<sup>Required</sup> <a name="initialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```typescript
public readonly initialClusterConfigurations: OcvpSddcInitialConfigurationInitialClusterConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `initialClusterConfigurationsInput`<sup>Optional</sup> <a name="initialClusterConfigurationsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput"></a>

```typescript
public readonly initialClusterConfigurationsInput: IResolvable | OcvpSddcInitialConfigurationInitialClusterConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcInitialConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>

---


### OcvpSddcTimeoutsOutputReference <a name="OcvpSddcTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpSddcTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---


### OcvpSddcUpgradeLicensesList <a name="OcvpSddcUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcUpgradeLicensesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get"></a>

```typescript
public get(index: number): OcvpSddcUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OcvpSddcUpgradeLicensesOutputReference <a name="OcvpSddcUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcUpgradeLicensesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey">licenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpSddcUpgradeLicenses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a>

---


### OcvpSddcVsphereUpgradeObjectsList <a name="OcvpSddcVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcVsphereUpgradeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get"></a>

```typescript
public get(index: number): OcvpSddcVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OcvpSddcVsphereUpgradeObjectsOutputReference <a name="OcvpSddcVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer"></a>

```typescript
import { ocvpSddc } from 'rhizo-co-terraform-provider-oci'

new ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink">downloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription">linkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downloadLink`<sup>Required</sup> <a name="downloadLink" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```typescript
public readonly downloadLink: string;
```

- *Type:* string

---

##### `linkDescription`<sup>Required</sup> <a name="linkDescription" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```typescript
public readonly linkDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpSddcVsphereUpgradeObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a>

---



