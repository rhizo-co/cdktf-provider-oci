# `blockchainBlockchainPlatform` Submodule <a name="`blockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainBlockchainPlatform <a name="BlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatform(scope: Construct, id: string, config: BlockchainBlockchainPlatformConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig">BlockchainBlockchainPlatformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig">BlockchainBlockchainPlatformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas">putReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText">resetCaCertArchiveText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId">resetFederatedUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol">resetIsByol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape">resetLoadBalancerShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs">resetStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity">resetTotalOcpuCapacity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicas` <a name="putReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas"></a>

```typescript
public putReplicas(value: BlockchainBlockchainPlatformReplicas): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockchainBlockchainPlatformTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---

##### `resetCaCertArchiveText` <a name="resetCaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText"></a>

```typescript
public resetCaCertArchiveText(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFederatedUserId` <a name="resetFederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId"></a>

```typescript
public resetFederatedUserId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsByol` <a name="resetIsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol"></a>

```typescript
public resetIsByol(): void
```

##### `resetLoadBalancerShape` <a name="resetLoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape"></a>

```typescript
public resetLoadBalancerShape(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetReplicas` <a name="resetReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetStorageSizeInTbs` <a name="resetStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs"></a>

```typescript
public resetStorageSizeInTbs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTotalOcpuCapacity` <a name="resetTotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity"></a>

```typescript
public resetTotalOcpuCapacity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockchainBlockchainPlatform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails">componentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">hostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd">isMultiAd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType">platformShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint">serviceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion">serviceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs">storageUsedInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput">caCertArchiveTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput">computeShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput">federatedUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput">idcsAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput">isByolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput">loadBalancerShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput">platformRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput">replicasInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput">storageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput">totalOcpuCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText">caCertArchiveText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape">computeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId">federatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol">isByol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape">loadBalancerShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole">platformRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs">storageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `componentDetails`<sup>Required</sup> <a name="componentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails"></a>

```typescript
public readonly componentDetails: BlockchainBlockchainPlatformComponentDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `hostOcpuUtilizationInfo`<sup>Required</sup> <a name="hostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```typescript
public readonly hostOcpuUtilizationInfo: BlockchainBlockchainPlatformHostOcpuUtilizationInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `isMultiAd`<sup>Required</sup> <a name="isMultiAd" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd"></a>

```typescript
public readonly isMultiAd: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `platformShapeType`<sup>Required</sup> <a name="platformShapeType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType"></a>

```typescript
public readonly platformShapeType: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas"></a>

```typescript
public readonly replicas: BlockchainBlockchainPlatformReplicasOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a>

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```typescript
public readonly serviceEndpoint: string;
```

- *Type:* string

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion"></a>

```typescript
public readonly serviceVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageUsedInTbs`<sup>Required</sup> <a name="storageUsedInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```typescript
public readonly storageUsedInTbs: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts"></a>

```typescript
public readonly timeouts: BlockchainBlockchainPlatformTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `caCertArchiveTextInput`<sup>Optional</sup> <a name="caCertArchiveTextInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput"></a>

```typescript
public readonly caCertArchiveTextInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeShapeInput`<sup>Optional</sup> <a name="computeShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput"></a>

```typescript
public readonly computeShapeInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `federatedUserIdInput`<sup>Optional</sup> <a name="federatedUserIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput"></a>

```typescript
public readonly federatedUserIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idcsAccessTokenInput`<sup>Optional</sup> <a name="idcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput"></a>

```typescript
public readonly idcsAccessTokenInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isByolInput`<sup>Optional</sup> <a name="isByolInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput"></a>

```typescript
public readonly isByolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerShapeInput`<sup>Optional</sup> <a name="loadBalancerShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput"></a>

```typescript
public readonly loadBalancerShapeInput: string;
```

- *Type:* string

---

##### `platformRoleInput`<sup>Optional</sup> <a name="platformRoleInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput"></a>

```typescript
public readonly platformRoleInput: string;
```

- *Type:* string

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput"></a>

```typescript
public readonly replicasInput: BlockchainBlockchainPlatformReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `storageSizeInTbsInput`<sup>Optional</sup> <a name="storageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput"></a>

```typescript
public readonly storageSizeInTbsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BlockchainBlockchainPlatformTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---

##### `totalOcpuCapacityInput`<sup>Optional</sup> <a name="totalOcpuCapacityInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput"></a>

```typescript
public readonly totalOcpuCapacityInput: number;
```

- *Type:* number

---

##### `caCertArchiveText`<sup>Required</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```typescript
public readonly caCertArchiveText: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape"></a>

```typescript
public readonly computeShape: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `federatedUserId`<sup>Required</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId"></a>

```typescript
public readonly federatedUserId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol"></a>

```typescript
public readonly isByol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancerShape`<sup>Required</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```typescript
public readonly loadBalancerShape: string;
```

- *Type:* string

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole"></a>

```typescript
public readonly platformRole: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `storageSizeInTbs`<sup>Required</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```typescript
public readonly storageSizeInTbs: number;
```

- *Type:* number

---

##### `totalOcpuCapacity`<sup>Required</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```typescript
public readonly totalOcpuCapacity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainBlockchainPlatformComponentDetails <a name="BlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformComponentDetails: blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails = { ... }
```


### BlockchainBlockchainPlatformComponentDetailsOsns <a name="BlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformComponentDetailsOsns: blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns = { ... }
```


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam: blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam = { ... }
```


### BlockchainBlockchainPlatformComponentDetailsPeers <a name="BlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformComponentDetailsPeers: blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers = { ... }
```


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam: blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam = { ... }
```


### BlockchainBlockchainPlatformConfig <a name="BlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformConfig: blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape">computeShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole">platformRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText">caCertArchiveText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId">federatedUserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol">isByol</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape">loadBalancerShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs">storageSizeInTbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape"></a>

```typescript
public readonly computeShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole"></a>

```typescript
public readonly platformRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `caCertArchiveText`<sup>Optional</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText"></a>

```typescript
public readonly caCertArchiveText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `federatedUserId`<sup>Optional</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId"></a>

```typescript
public readonly federatedUserId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isByol`<sup>Optional</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol"></a>

```typescript
public readonly isByol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `loadBalancerShape`<sup>Optional</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape"></a>

```typescript
public readonly loadBalancerShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas"></a>

```typescript
public readonly replicas: BlockchainBlockchainPlatformReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `storageSizeInTbs`<sup>Optional</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs"></a>

```typescript
public readonly storageSizeInTbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BlockchainBlockchainPlatformTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `totalOcpuCapacity`<sup>Optional</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity"></a>

```typescript
public readonly totalOcpuCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

### BlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformHostOcpuUtilizationInfo: blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo = { ... }
```


### BlockchainBlockchainPlatformReplicas <a name="BlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformReplicas: blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount">caCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount">consoleCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount">proxyCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}. |

---

##### `caCount`<sup>Optional</sup> <a name="caCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount"></a>

```typescript
public readonly caCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}.

---

##### `consoleCount`<sup>Optional</sup> <a name="consoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount"></a>

```typescript
public readonly consoleCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}.

---

##### `proxyCount`<sup>Optional</sup> <a name="proxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount"></a>

```typescript
public readonly proxyCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}.

---

### BlockchainBlockchainPlatformTimeouts <a name="BlockchainBlockchainPlatformTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

const blockchainBlockchainPlatformTimeouts: blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainBlockchainPlatformComponentDetailsList <a name="BlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get"></a>

```typescript
public get(index: number): BlockchainBlockchainPlatformComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```typescript
public get(index: number): BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```typescript
public get(index: number): BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```typescript
public readonly ocpuAllocationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">osnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```typescript
public readonly ocpuAllocationParam: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osnKey`<sup>Required</sup> <a name="osnKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```typescript
public readonly osnKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformComponentDetailsOsns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### BlockchainBlockchainPlatformComponentDetailsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```typescript
public readonly osns: BlockchainBlockchainPlatformComponentDetailsOsnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```typescript
public readonly peers: BlockchainBlockchainPlatformComponentDetailsPeersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformComponentDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersList <a name="BlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```typescript
public get(index: number): BlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```typescript
public get(index: number): BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```typescript
public readonly ocpuAllocationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">peerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```typescript
public readonly ocpuAllocationParam: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peerKey`<sup>Required</sup> <a name="peerKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```typescript
public readonly peerKey: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformComponentDetailsPeers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```typescript
public get(index: number): BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpuCapacityNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpuUtilizationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ocpuCapacityNumber`<sup>Required</sup> <a name="ocpuCapacityNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```typescript
public readonly ocpuCapacityNumber: number;
```

- *Type:* number

---

##### `ocpuUtilizationNumber`<sup>Required</sup> <a name="ocpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```typescript
public readonly ocpuUtilizationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformHostOcpuUtilizationInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### BlockchainBlockchainPlatformReplicasOutputReference <a name="BlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount">resetCaCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount">resetConsoleCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount">resetProxyCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCount` <a name="resetCaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount"></a>

```typescript
public resetCaCount(): void
```

##### `resetConsoleCount` <a name="resetConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount"></a>

```typescript
public resetConsoleCount(): void
```

##### `resetProxyCount` <a name="resetProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount"></a>

```typescript
public resetProxyCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput">caCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput">consoleCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput">proxyCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount">caCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">consoleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">proxyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCountInput`<sup>Optional</sup> <a name="caCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput"></a>

```typescript
public readonly caCountInput: number;
```

- *Type:* number

---

##### `consoleCountInput`<sup>Optional</sup> <a name="consoleCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput"></a>

```typescript
public readonly consoleCountInput: number;
```

- *Type:* number

---

##### `proxyCountInput`<sup>Optional</sup> <a name="proxyCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput"></a>

```typescript
public readonly proxyCountInput: number;
```

- *Type:* number

---

##### `caCount`<sup>Required</sup> <a name="caCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```typescript
public readonly caCount: number;
```

- *Type:* number

---

##### `consoleCount`<sup>Required</sup> <a name="consoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```typescript
public readonly consoleCount: number;
```

- *Type:* number

---

##### `proxyCount`<sup>Required</sup> <a name="proxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```typescript
public readonly proxyCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockchainBlockchainPlatformReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---


### BlockchainBlockchainPlatformTimeoutsOutputReference <a name="BlockchainBlockchainPlatformTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer"></a>

```typescript
import { blockchainBlockchainPlatform } from 'rhizo-co-terraform-provider-oci'

new blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockchainBlockchainPlatformTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---



