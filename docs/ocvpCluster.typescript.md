# `ocvpCluster` Submodule <a name="`ocvpCluster` Submodule" id="rhizo-co-terraform-provider-oci.ocvpCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpCluster <a name="OcvpCluster" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster oci_ocvp_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpCluster(scope: Construct, id: string, config: OcvpClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig">OcvpClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig">OcvpClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putDatastores">putDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDatastores">resetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetEsxiSoftwareVersion">resetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialCommitment">resetInitialCommitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostOcpuCount">resetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostShapeName">resetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInstanceDisplayNamePrefix">resetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetIsShieldedInstanceEnabled">resetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetVmwareSoftwareVersion">resetVmwareSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetWorkloadNetworkCidr">resetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastores` <a name="putDatastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putDatastores"></a>

```typescript
public putDatastores(value: IResolvable | OcvpClusterDatastores[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putDatastores.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: OcvpClusterNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: OcvpClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a>

---

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetDatastores` <a name="resetDatastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDatastores"></a>

```typescript
public resetDatastores(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEsxiSoftwareVersion` <a name="resetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetEsxiSoftwareVersion"></a>

```typescript
public resetEsxiSoftwareVersion(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialCommitment` <a name="resetInitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialCommitment"></a>

```typescript
public resetInitialCommitment(): void
```

##### `resetInitialHostOcpuCount` <a name="resetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostOcpuCount"></a>

```typescript
public resetInitialHostOcpuCount(): void
```

##### `resetInitialHostShapeName` <a name="resetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInitialHostShapeName"></a>

```typescript
public resetInitialHostShapeName(): void
```

##### `resetInstanceDisplayNamePrefix` <a name="resetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetInstanceDisplayNamePrefix"></a>

```typescript
public resetInstanceDisplayNamePrefix(): void
```

##### `resetIsShieldedInstanceEnabled` <a name="resetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetIsShieldedInstanceEnabled"></a>

```typescript
public resetIsShieldedInstanceEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmwareSoftwareVersion` <a name="resetVmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetVmwareSoftwareVersion"></a>

```typescript
public resetVmwareSoftwareVersion(): void
```

##### `resetWorkloadNetworkCidr` <a name="resetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.resetWorkloadNetworkCidr"></a>

```typescript
public resetWorkloadNetworkCidr(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isConstruct"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

ocvpCluster.OcvpCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformElement"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

ocvpCluster.OcvpCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformResource"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

ocvpCluster.OcvpCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

ocvpCluster.OcvpCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OcvpCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OcvpCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OcvpCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OcvpCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList">OcvpClusterDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference">OcvpClusterNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference">OcvpClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.upgradeLicenses">upgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList">OcvpClusterUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereType">vsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereUpgradeObjects">vsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList">OcvpClusterVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastoresInput">datastoresInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCountInput">esxiHostsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersionInput">esxiSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitmentInput">initialCommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCountInput">initialHostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeNameInput">initialHostShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefixInput">instanceDisplayNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabledInput">isShieldedInstanceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcIdInput">sddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersionInput">vmwareSoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidrInput">workloadNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitment">initialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcId">sddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.actualEsxiHostsCount"></a>

```typescript
public readonly actualEsxiHostsCount: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastores"></a>

```typescript
public readonly datastores: OcvpClusterDatastoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList">OcvpClusterDatastoresList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: OcvpClusterNetworkConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference">OcvpClusterNetworkConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeouts"></a>

```typescript
public readonly timeouts: OcvpClusterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference">OcvpClusterTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradeLicenses`<sup>Required</sup> <a name="upgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.upgradeLicenses"></a>

```typescript
public readonly upgradeLicenses: OcvpClusterUpgradeLicensesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList">OcvpClusterUpgradeLicensesList</a>

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereType"></a>

```typescript
public readonly vsphereType: string;
```

- *Type:* string

---

##### `vsphereUpgradeObjects`<sup>Required</sup> <a name="vsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vsphereUpgradeObjects"></a>

```typescript
public readonly vsphereUpgradeObjects: OcvpClusterVsphereUpgradeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList">OcvpClusterVsphereUpgradeObjectsList</a>

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomainInput"></a>

```typescript
public readonly computeAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `datastoresInput`<sup>Optional</sup> <a name="datastoresInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.datastoresInput"></a>

```typescript
public readonly datastoresInput: IResolvable | OcvpClusterDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `esxiHostsCountInput`<sup>Optional</sup> <a name="esxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCountInput"></a>

```typescript
public readonly esxiHostsCountInput: number;
```

- *Type:* number

---

##### `esxiSoftwareVersionInput`<sup>Optional</sup> <a name="esxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersionInput"></a>

```typescript
public readonly esxiSoftwareVersionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialCommitmentInput`<sup>Optional</sup> <a name="initialCommitmentInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitmentInput"></a>

```typescript
public readonly initialCommitmentInput: string;
```

- *Type:* string

---

##### `initialHostOcpuCountInput`<sup>Optional</sup> <a name="initialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCountInput"></a>

```typescript
public readonly initialHostOcpuCountInput: number;
```

- *Type:* number

---

##### `initialHostShapeNameInput`<sup>Optional</sup> <a name="initialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeNameInput"></a>

```typescript
public readonly initialHostShapeNameInput: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="instanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefixInput"></a>

```typescript
public readonly instanceDisplayNamePrefixInput: string;
```

- *Type:* string

---

##### `isShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="isShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabledInput"></a>

```typescript
public readonly isShieldedInstanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: OcvpClusterNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

---

##### `sddcIdInput`<sup>Optional</sup> <a name="sddcIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcIdInput"></a>

```typescript
public readonly sddcIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OcvpClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a>

---

##### `vmwareSoftwareVersionInput`<sup>Optional</sup> <a name="vmwareSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersionInput"></a>

```typescript
public readonly vmwareSoftwareVersionInput: string;
```

- *Type:* string

---

##### `workloadNetworkCidrInput`<sup>Optional</sup> <a name="workloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidrInput"></a>

```typescript
public readonly workloadNetworkCidrInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialCommitment`<sup>Required</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialCommitment"></a>

```typescript
public readonly initialCommitment: string;
```

- *Type:* string

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpClusterConfig <a name="OcvpClusterConfig" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

const ocvpClusterConfig: ocvpCluster.OcvpClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#compute_availability_domain OcvpCluster#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_hosts_count OcvpCluster#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.sddcId">sddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#sddc_id OcvpCluster#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#capacity_reservation_id OcvpCluster#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.datastores">datastores</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#defined_tags OcvpCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#display_name OcvpCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_software_version OcvpCluster#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#freeform_tags OcvpCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#id OcvpCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialCommitment">initialCommitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_commitment OcvpCluster#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_ocpu_count OcvpCluster#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_shape_name OcvpCluster#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#instance_display_name_prefix OcvpCluster#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#is_shielded_instance_enabled OcvpCluster#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmware_software_version OcvpCluster#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#workload_network_cidr OcvpCluster#workload_network_cidr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#compute_availability_domain OcvpCluster#compute_availability_domain}.

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_hosts_count OcvpCluster#esxi_hosts_count}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: OcvpClusterNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#network_configuration OcvpCluster#network_configuration}

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#sddc_id OcvpCluster#sddc_id}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#capacity_reservation_id OcvpCluster#capacity_reservation_id}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.datastores"></a>

```typescript
public readonly datastores: IResolvable | OcvpClusterDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#datastores OcvpCluster#datastores}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#defined_tags OcvpCluster#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#display_name OcvpCluster#display_name}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#esxi_software_version OcvpCluster#esxi_software_version}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#freeform_tags OcvpCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#id OcvpCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialCommitment`<sup>Optional</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialCommitment"></a>

```typescript
public readonly initialCommitment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_commitment OcvpCluster#initial_commitment}.

---

##### `initialHostOcpuCount`<sup>Optional</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_ocpu_count OcvpCluster#initial_host_ocpu_count}.

---

##### `initialHostShapeName`<sup>Optional</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#initial_host_shape_name OcvpCluster#initial_host_shape_name}.

---

##### `instanceDisplayNamePrefix`<sup>Optional</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#instance_display_name_prefix OcvpCluster#instance_display_name_prefix}.

---

##### `isShieldedInstanceEnabled`<sup>Optional</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#is_shielded_instance_enabled OcvpCluster#is_shielded_instance_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OcvpClusterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#timeouts OcvpCluster#timeouts}

---

##### `vmwareSoftwareVersion`<sup>Optional</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmware_software_version OcvpCluster#vmware_software_version}.

---

##### `workloadNetworkCidr`<sup>Optional</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterConfig.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#workload_network_cidr OcvpCluster#workload_network_cidr}.

---

### OcvpClusterDatastores <a name="OcvpClusterDatastores" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

const ocvpClusterDatastores: ocvpCluster.OcvpClusterDatastores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#block_volume_ids OcvpCluster#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.datastoreType">datastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#datastore_type OcvpCluster#datastore_type}. |

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#block_volume_ids OcvpCluster#block_volume_ids}.

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#datastore_type OcvpCluster#datastore_type}.

---

### OcvpClusterNetworkConfiguration <a name="OcvpClusterNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

const ocvpClusterNetworkConfiguration: ocvpCluster.OcvpClusterNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_vtep_vlan_id OcvpCluster#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_vtep_vlan_id OcvpCluster#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_subnet_id OcvpCluster#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmotion_vlan_id OcvpCluster#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsan_vlan_id OcvpCluster#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#hcx_vlan_id OcvpCluster#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink1vlan_id OcvpCluster#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink2vlan_id OcvpCluster#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_vlan_id OcvpCluster#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#replication_vlan_id OcvpCluster#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsphere_vlan_id OcvpCluster#vsphere_vlan_id}. |

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_vtep_vlan_id OcvpCluster#nsx_edge_vtep_vlan_id}.

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_vtep_vlan_id OcvpCluster#nsx_vtep_vlan_id}.

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_subnet_id OcvpCluster#provisioning_subnet_id}.

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vmotion_vlan_id OcvpCluster#vmotion_vlan_id}.

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsan_vlan_id OcvpCluster#vsan_vlan_id}.

---

##### `hcxVlanId`<sup>Optional</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#hcx_vlan_id OcvpCluster#hcx_vlan_id}.

---

##### `nsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink1vlan_id OcvpCluster#nsx_edge_uplink1vlan_id}.

---

##### `nsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#nsx_edge_uplink2vlan_id OcvpCluster#nsx_edge_uplink2vlan_id}.

---

##### `provisioningVlanId`<sup>Optional</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#provisioning_vlan_id OcvpCluster#provisioning_vlan_id}.

---

##### `replicationVlanId`<sup>Optional</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#replication_vlan_id OcvpCluster#replication_vlan_id}.

---

##### `vsphereVlanId`<sup>Optional</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#vsphere_vlan_id OcvpCluster#vsphere_vlan_id}.

---

### OcvpClusterTimeouts <a name="OcvpClusterTimeouts" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

const ocvpClusterTimeouts: ocvpCluster.OcvpClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#create OcvpCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#delete OcvpCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#update OcvpCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#create OcvpCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#delete OcvpCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_cluster#update OcvpCluster#update}.

---

### OcvpClusterUpgradeLicenses <a name="OcvpClusterUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

const ocvpClusterUpgradeLicenses: ocvpCluster.OcvpClusterUpgradeLicenses = { ... }
```


### OcvpClusterVsphereUpgradeObjects <a name="OcvpClusterVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

const ocvpClusterVsphereUpgradeObjects: ocvpCluster.OcvpClusterVsphereUpgradeObjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpClusterDatastoresList <a name="OcvpClusterDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterDatastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.get"></a>

```typescript
public get(index: number): OcvpClusterDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpClusterDatastores[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>[]

---


### OcvpClusterDatastoresOutputReference <a name="OcvpClusterDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterDatastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIdsInput">blockVolumeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreTypeInput">datastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `blockVolumeIdsInput`<sup>Optional</sup> <a name="blockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```typescript
public readonly blockVolumeIdsInput: string[];
```

- *Type:* string[]

---

##### `datastoreTypeInput`<sup>Optional</sup> <a name="datastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreTypeInput"></a>

```typescript
public readonly datastoreTypeInput: string;
```

- *Type:* string

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpClusterDatastores;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterDatastores">OcvpClusterDatastores</a>

---


### OcvpClusterNetworkConfigurationOutputReference <a name="OcvpClusterNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetHcxVlanId">resetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">resetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">resetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetProvisioningVlanId">resetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetReplicationVlanId">resetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetVsphereVlanId">resetVsphereVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHcxVlanId` <a name="resetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```typescript
public resetHcxVlanId(): void
```

##### `resetNsxEdgeUplink1VlanId` <a name="resetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```typescript
public resetNsxEdgeUplink1VlanId(): void
```

##### `resetNsxEdgeUplink2VlanId` <a name="resetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```typescript
public resetNsxEdgeUplink2VlanId(): void
```

##### `resetProvisioningVlanId` <a name="resetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```typescript
public resetProvisioningVlanId(): void
```

##### `resetReplicationVlanId` <a name="resetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```typescript
public resetReplicationVlanId(): void
```

##### `resetVsphereVlanId` <a name="resetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```typescript
public resetVsphereVlanId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanIdInput">hcxVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">nsxEdgeUplink1VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">nsxEdgeUplink2VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">nsxEdgeVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">nsxVtepVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">provisioningSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanIdInput">provisioningVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanIdInput">replicationVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanIdInput">vmotionVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanIdInput">vsanVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanIdInput">vsphereVlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hcxVlanIdInput`<sup>Optional</sup> <a name="hcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```typescript
public readonly hcxVlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```typescript
public readonly nsxEdgeUplink1VlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```typescript
public readonly nsxEdgeUplink2VlanIdInput: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="nsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```typescript
public readonly nsxEdgeVtepVlanIdInput: string;
```

- *Type:* string

---

##### `nsxVtepVlanIdInput`<sup>Optional</sup> <a name="nsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```typescript
public readonly nsxVtepVlanIdInput: string;
```

- *Type:* string

---

##### `provisioningSubnetIdInput`<sup>Optional</sup> <a name="provisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```typescript
public readonly provisioningSubnetIdInput: string;
```

- *Type:* string

---

##### `provisioningVlanIdInput`<sup>Optional</sup> <a name="provisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```typescript
public readonly provisioningVlanIdInput: string;
```

- *Type:* string

---

##### `replicationVlanIdInput`<sup>Optional</sup> <a name="replicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```typescript
public readonly replicationVlanIdInput: string;
```

- *Type:* string

---

##### `vmotionVlanIdInput`<sup>Optional</sup> <a name="vmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```typescript
public readonly vmotionVlanIdInput: string;
```

- *Type:* string

---

##### `vsanVlanIdInput`<sup>Optional</sup> <a name="vsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```typescript
public readonly vsanVlanIdInput: string;
```

- *Type:* string

---

##### `vsphereVlanIdInput`<sup>Optional</sup> <a name="vsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```typescript
public readonly vsphereVlanIdInput: string;
```

- *Type:* string

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpClusterNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterNetworkConfiguration">OcvpClusterNetworkConfiguration</a>

---


### OcvpClusterTimeoutsOutputReference <a name="OcvpClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OcvpClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterTimeouts">OcvpClusterTimeouts</a>

---


### OcvpClusterUpgradeLicensesList <a name="OcvpClusterUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterUpgradeLicensesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.get"></a>

```typescript
public get(index: number): OcvpClusterUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OcvpClusterUpgradeLicensesOutputReference <a name="OcvpClusterUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterUpgradeLicensesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseKey">licenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses">OcvpClusterUpgradeLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicensesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpClusterUpgradeLicenses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterUpgradeLicenses">OcvpClusterUpgradeLicenses</a>

---


### OcvpClusterVsphereUpgradeObjectsList <a name="OcvpClusterVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterVsphereUpgradeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.get"></a>

```typescript
public get(index: number): OcvpClusterVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OcvpClusterVsphereUpgradeObjectsOutputReference <a name="OcvpClusterVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer"></a>

```typescript
import { ocvpCluster } from 'rhizo-co-terraform-provider-oci'

new ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink">downloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription">linkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects">OcvpClusterVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downloadLink`<sup>Required</sup> <a name="downloadLink" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```typescript
public readonly downloadLink: string;
```

- *Type:* string

---

##### `linkDescription`<sup>Required</sup> <a name="linkDescription" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```typescript
public readonly linkDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OcvpClusterVsphereUpgradeObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpCluster.OcvpClusterVsphereUpgradeObjects">OcvpClusterVsphereUpgradeObjects</a>

---



