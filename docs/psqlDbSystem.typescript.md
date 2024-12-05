# `psqlDbSystem` Submodule <a name="`psqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.psqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PsqlDbSystem <a name="PsqlDbSystem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system oci_psql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystem(scope: Construct, id: string, config: PsqlDbSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig">PsqlDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig">PsqlDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails">putInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy">putManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails">putNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails">putStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig">resetApplyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId">resetConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs">resetInstanceMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount">resetInstanceOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails">resetInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy">resetManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType">resetSystemType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials"></a>

```typescript
public putCredentials(value: PsqlDbSystemCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `putInstancesDetails` <a name="putInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails"></a>

```typescript
public putInstancesDetails(value: IResolvable | PsqlDbSystemInstancesDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]

---

##### `putManagementPolicy` <a name="putManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy"></a>

```typescript
public putManagementPolicy(value: PsqlDbSystemManagementPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `putNetworkDetails` <a name="putNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails"></a>

```typescript
public putNetworkDetails(value: PsqlDbSystemNetworkDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations"></a>

```typescript
public putPatchOperations(value: IResolvable | PsqlDbSystemPatchOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource"></a>

```typescript
public putSource(value: PsqlDbSystemSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `putStorageDetails` <a name="putStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails"></a>

```typescript
public putStorageDetails(value: PsqlDbSystemStorageDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: PsqlDbSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---

##### `resetApplyConfig` <a name="resetApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig"></a>

```typescript
public resetApplyConfig(): void
```

##### `resetConfigId` <a name="resetConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId"></a>

```typescript
public resetConfigId(): void
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetInstanceMemorySizeInGbs` <a name="resetInstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs"></a>

```typescript
public resetInstanceMemorySizeInGbs(): void
```

##### `resetInstanceOcpuCount` <a name="resetInstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount"></a>

```typescript
public resetInstanceOcpuCount(): void
```

##### `resetInstancesDetails` <a name="resetInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails"></a>

```typescript
public resetInstancesDetails(): void
```

##### `resetManagementPolicy` <a name="resetManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy"></a>

```typescript
public resetManagementPolicy(): void
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations"></a>

```typescript
public resetPatchOperations(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSystemType` <a name="resetSystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType"></a>

```typescript
public resetSystemType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

psqlDbSystem.PsqlDbSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

psqlDbSystem.PsqlDbSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

psqlDbSystem.PsqlDbSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

psqlDbSystem.PsqlDbSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PsqlDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PsqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PsqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances">instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails">instancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput">applyConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput">instanceMemorySizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput">instanceOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput">instancesDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput">managementPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput">networkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput">patchOperationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput">storageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput">systemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig">applyConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType">systemType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials"></a>

```typescript
public readonly credentials: PsqlDbSystemCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances"></a>

```typescript
public readonly instances: PsqlDbSystemInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a>

---

##### `instancesDetails`<sup>Required</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails"></a>

```typescript
public readonly instancesDetails: PsqlDbSystemInstancesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementPolicy`<sup>Required</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy"></a>

```typescript
public readonly managementPolicy: PsqlDbSystemManagementPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a>

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails"></a>

```typescript
public readonly networkDetails: PsqlDbSystemNetworkDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations"></a>

```typescript
public readonly patchOperations: PsqlDbSystemPatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source"></a>

```typescript
public readonly source: PsqlDbSystemSourceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails"></a>

```typescript
public readonly storageDetails: PsqlDbSystemStorageDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts"></a>

```typescript
public readonly timeouts: PsqlDbSystemTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `applyConfigInput`<sup>Optional</sup> <a name="applyConfigInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput"></a>

```typescript
public readonly applyConfigInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: PsqlDbSystemCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceMemorySizeInGbsInput`<sup>Optional</sup> <a name="instanceMemorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput"></a>

```typescript
public readonly instanceMemorySizeInGbsInput: number;
```

- *Type:* number

---

##### `instanceOcpuCountInput`<sup>Optional</sup> <a name="instanceOcpuCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput"></a>

```typescript
public readonly instanceOcpuCountInput: number;
```

- *Type:* number

---

##### `instancesDetailsInput`<sup>Optional</sup> <a name="instancesDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput"></a>

```typescript
public readonly instancesDetailsInput: IResolvable | PsqlDbSystemInstancesDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]

---

##### `managementPolicyInput`<sup>Optional</sup> <a name="managementPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput"></a>

```typescript
public readonly managementPolicyInput: PsqlDbSystemManagementPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `networkDetailsInput`<sup>Optional</sup> <a name="networkDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput"></a>

```typescript
public readonly networkDetailsInput: PsqlDbSystemNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput"></a>

```typescript
public readonly patchOperationsInput: IResolvable | PsqlDbSystemPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput"></a>

```typescript
public readonly sourceInput: PsqlDbSystemSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `storageDetailsInput`<sup>Optional</sup> <a name="storageDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput"></a>

```typescript
public readonly storageDetailsInput: PsqlDbSystemStorageDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `systemTypeInput`<sup>Optional</sup> <a name="systemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput"></a>

```typescript
public readonly systemTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PsqlDbSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---

##### `applyConfig`<sup>Required</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig"></a>

```typescript
public readonly applyConfig: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs"></a>

```typescript
public readonly instanceMemorySizeInGbs: number;
```

- *Type:* number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount"></a>

```typescript
public readonly instanceOcpuCount: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PsqlDbSystemConfig <a name="PsqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemConfig: psqlDbSystem.PsqlDbSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion">dbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig">applyConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId">configId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails">instancesDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]</code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations">patchOperations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType">systemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails"></a>

```typescript
public readonly networkDetails: PsqlDbSystemNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails"></a>

```typescript
public readonly storageDetails: PsqlDbSystemStorageDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `applyConfig`<sup>Optional</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig"></a>

```typescript
public readonly applyConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `configId`<sup>Optional</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials"></a>

```typescript
public readonly credentials: PsqlDbSystemCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `instanceMemorySizeInGbs`<sup>Optional</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs"></a>

```typescript
public readonly instanceMemorySizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `instanceOcpuCount`<sup>Optional</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount"></a>

```typescript
public readonly instanceOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `instancesDetails`<sup>Optional</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails"></a>

```typescript
public readonly instancesDetails: IResolvable | PsqlDbSystemInstancesDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `managementPolicy`<sup>Optional</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy"></a>

```typescript
public readonly managementPolicy: PsqlDbSystemManagementPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations"></a>

```typescript
public readonly patchOperations: IResolvable | PsqlDbSystemPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source"></a>

```typescript
public readonly source: PsqlDbSystemSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `systemType`<sup>Optional</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PsqlDbSystemTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}

---

### PsqlDbSystemCredentials <a name="PsqlDbSystemCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemCredentials: psqlDbSystem.PsqlDbSystemCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails">passwordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | password_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}. |

---

##### `passwordDetails`<sup>Required</sup> <a name="passwordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails"></a>

```typescript
public readonly passwordDetails: PsqlDbSystemCredentialsPasswordDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

password_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}.

---

### PsqlDbSystemCredentialsPasswordDetails <a name="PsqlDbSystemCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemCredentialsPasswordDetails: psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType">passwordType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion">secretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}. |

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}.

---

### PsqlDbSystemInstances <a name="PsqlDbSystemInstances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemInstances: psqlDbSystem.PsqlDbSystemInstances = { ... }
```


### PsqlDbSystemInstancesDetails <a name="PsqlDbSystemInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemInstancesDetails: psqlDbSystem.PsqlDbSystemInstancesDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}.

---

### PsqlDbSystemManagementPolicy <a name="PsqlDbSystemManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemManagementPolicy: psqlDbSystem.PsqlDbSystemManagementPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}. |

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: PsqlDbSystemManagementPolicyBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}.

---

### PsqlDbSystemManagementPolicyBackupPolicy <a name="PsqlDbSystemManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemManagementPolicyBackupPolicy: psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart">backupStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth">daysOfTheMonth</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}. |

---

##### `backupStart`<sup>Optional</sup> <a name="backupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart"></a>

```typescript
public readonly backupStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}.

---

##### `daysOfTheMonth`<sup>Optional</sup> <a name="daysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth"></a>

```typescript
public readonly daysOfTheMonth: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}.

---

##### `daysOfTheWeek`<sup>Optional</sup> <a name="daysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek"></a>

```typescript
public readonly daysOfTheWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}.

---

### PsqlDbSystemNetworkDetails <a name="PsqlDbSystemNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemNetworkDetails: psqlDbSystem.PsqlDbSystemNetworkDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp">primaryDbEndpointPrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}.

---

##### `primaryDbEndpointPrivateIp`<sup>Optional</sup> <a name="primaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp"></a>

```typescript
public readonly primaryDbEndpointPrivateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}.

---

### PsqlDbSystemPatchOperations <a name="PsqlDbSystemPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemPatchOperations: psqlDbSystem.PsqlDbSystemPatchOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection">selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position">position</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem">selectedItem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value">value</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}.

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}.

---

##### `selectedItem`<sup>Optional</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value"></a>

```typescript
public readonly value: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}.

---

### PsqlDbSystemSource <a name="PsqlDbSystemSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemSource: psqlDbSystem.PsqlDbSystemSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides">isHavingRestoreConfigOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}.

---

##### `isHavingRestoreConfigOverrides`<sup>Optional</sup> <a name="isHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides"></a>

```typescript
public readonly isHavingRestoreConfigOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}.

---

### PsqlDbSystemStorageDetails <a name="PsqlDbSystemStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemStorageDetails: psqlDbSystem.PsqlDbSystemStorageDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable">isRegionallyDurable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType">systemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops">iops</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}. |

---

##### `isRegionallyDurable`<sup>Required</sup> <a name="isRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable"></a>

```typescript
public readonly isRegionallyDurable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}.

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops"></a>

```typescript
public readonly iops: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}.

---

### PsqlDbSystemTimeouts <a name="PsqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

const psqlDbSystemTimeouts: psqlDbSystem.PsqlDbSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PsqlDbSystemCredentialsOutputReference <a name="PsqlDbSystemCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails">putPasswordDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPasswordDetails` <a name="putPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails"></a>

```typescript
public putPasswordDetails(value: PsqlDbSystemCredentialsPasswordDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails">passwordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput">passwordDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordDetails`<sup>Required</sup> <a name="passwordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails"></a>

```typescript
public readonly passwordDetails: PsqlDbSystemCredentialsPasswordDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a>

---

##### `passwordDetailsInput`<sup>Optional</sup> <a name="passwordDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput"></a>

```typescript
public readonly passwordDetailsInput: PsqlDbSystemCredentialsPasswordDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---


### PsqlDbSystemCredentialsPasswordDetailsOutputReference <a name="PsqlDbSystemCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetSecretVersion` <a name="resetSecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion"></a>

```typescript
public resetSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput">passwordTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType">passwordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordTypeInput`<sup>Optional</sup> <a name="passwordTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput"></a>

```typescript
public readonly passwordTypeInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemCredentialsPasswordDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


### PsqlDbSystemInstancesDetailsList <a name="PsqlDbSystemInstancesDetailsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemInstancesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get"></a>

```typescript
public get(index: number): PsqlDbSystemInstancesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlDbSystemInstancesDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>[]

---


### PsqlDbSystemInstancesDetailsOutputReference <a name="PsqlDbSystemInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlDbSystemInstancesDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>

---


### PsqlDbSystemInstancesList <a name="PsqlDbSystemInstancesList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get"></a>

```typescript
public get(index: number): PsqlDbSystemInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PsqlDbSystemInstancesOutputReference <a name="PsqlDbSystemInstancesOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a>

---


### PsqlDbSystemManagementPolicyBackupPolicyOutputReference <a name="PsqlDbSystemManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart">resetBackupStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth">resetDaysOfTheMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek">resetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupStart` <a name="resetBackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart"></a>

```typescript
public resetBackupStart(): void
```

##### `resetDaysOfTheMonth` <a name="resetDaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth"></a>

```typescript
public resetDaysOfTheMonth(): void
```

##### `resetDaysOfTheWeek` <a name="resetDaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek"></a>

```typescript
public resetDaysOfTheWeek(): void
```

##### `resetKind` <a name="resetKind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput">backupStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput">daysOfTheMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput">daysOfTheWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart">backupStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">daysOfTheMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupStartInput`<sup>Optional</sup> <a name="backupStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput"></a>

```typescript
public readonly backupStartInput: string;
```

- *Type:* string

---

##### `daysOfTheMonthInput`<sup>Optional</sup> <a name="daysOfTheMonthInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput"></a>

```typescript
public readonly daysOfTheMonthInput: number[];
```

- *Type:* number[]

---

##### `daysOfTheWeekInput`<sup>Optional</sup> <a name="daysOfTheWeekInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput"></a>

```typescript
public readonly daysOfTheWeekInput: string[];
```

- *Type:* string[]

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `backupStart`<sup>Required</sup> <a name="backupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```typescript
public readonly backupStart: string;
```

- *Type:* string

---

##### `daysOfTheMonth`<sup>Required</sup> <a name="daysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```typescript
public readonly daysOfTheMonth: number[];
```

- *Type:* number[]

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```typescript
public readonly daysOfTheWeek: string[];
```

- *Type:* string[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemManagementPolicyBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---


### PsqlDbSystemManagementPolicyOutputReference <a name="PsqlDbSystemManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart">resetMaintenanceWindowStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupPolicy` <a name="putBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy"></a>

```typescript
public putBackupPolicy(value: PsqlDbSystemManagementPolicyBackupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy"></a>

```typescript
public resetBackupPolicy(): void
```

##### `resetMaintenanceWindowStart` <a name="resetMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart"></a>

```typescript
public resetMaintenanceWindowStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput">backupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput">maintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: PsqlDbSystemManagementPolicyBackupPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a>

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput"></a>

```typescript
public readonly backupPolicyInput: PsqlDbSystemManagementPolicyBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `maintenanceWindowStartInput`<sup>Optional</sup> <a name="maintenanceWindowStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput"></a>

```typescript
public readonly maintenanceWindowStartInput: string;
```

- *Type:* string

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemManagementPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---


### PsqlDbSystemNetworkDetailsOutputReference <a name="PsqlDbSystemNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp">resetPrimaryDbEndpointPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrimaryDbEndpointPrivateIp` <a name="resetPrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp"></a>

```typescript
public resetPrimaryDbEndpointPrivateIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput">primaryDbEndpointPrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">primaryDbEndpointPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `primaryDbEndpointPrivateIpInput`<sup>Optional</sup> <a name="primaryDbEndpointPrivateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput"></a>

```typescript
public readonly primaryDbEndpointPrivateIpInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `primaryDbEndpointPrivateIp`<sup>Required</sup> <a name="primaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```typescript
public readonly primaryDbEndpointPrivateIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---


### PsqlDbSystemPatchOperationsList <a name="PsqlDbSystemPatchOperationsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemPatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get"></a>

```typescript
public get(index: number): PsqlDbSystemPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlDbSystemPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>[]

---


### PsqlDbSystemPatchOperationsOutputReference <a name="PsqlDbSystemPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem">resetSelectedItem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetSelectedItem` <a name="resetSelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem"></a>

```typescript
public resetSelectedItem(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput">positionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput">selectedItemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value">value</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: string;
```

- *Type:* string

---

##### `selectedItemInput`<sup>Optional</sup> <a name="selectedItemInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput"></a>

```typescript
public readonly selectedItemInput: string;
```

- *Type:* string

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput"></a>

```typescript
public readonly selectionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlDbSystemPatchOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>

---


### PsqlDbSystemSourceOutputReference <a name="PsqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides">resetIsHavingRestoreConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetIsHavingRestoreConfigOverrides` <a name="resetIsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides"></a>

```typescript
public resetIsHavingRestoreConfigOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput">isHavingRestoreConfigOverridesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides">isHavingRestoreConfigOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `isHavingRestoreConfigOverridesInput`<sup>Optional</sup> <a name="isHavingRestoreConfigOverridesInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput"></a>

```typescript
public readonly isHavingRestoreConfigOverridesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `isHavingRestoreConfigOverrides`<sup>Required</sup> <a name="isHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```typescript
public readonly isHavingRestoreConfigOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---


### PsqlDbSystemStorageDetailsOutputReference <a name="PsqlDbSystemStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops">resetIops</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetIops` <a name="resetIops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput">iopsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput">isRegionallyDurableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput">systemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops">iops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable">isRegionallyDurable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType">systemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: string;
```

- *Type:* string

---

##### `isRegionallyDurableInput`<sup>Optional</sup> <a name="isRegionallyDurableInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput"></a>

```typescript
public readonly isRegionallyDurableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `systemTypeInput`<sup>Optional</sup> <a name="systemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput"></a>

```typescript
public readonly systemTypeInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops"></a>

```typescript
public readonly iops: string;
```

- *Type:* string

---

##### `isRegionallyDurable`<sup>Required</sup> <a name="isRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```typescript
public readonly isRegionallyDurable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PsqlDbSystemStorageDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---


### PsqlDbSystemTimeoutsOutputReference <a name="PsqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { psqlDbSystem } from 'rhizo-co-terraform-provider-oci'

new psqlDbSystem.PsqlDbSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PsqlDbSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---



