# `databaseDataGuardAssociation` Submodule <a name="`databaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDataGuardAssociation <a name="DatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

new databaseDataGuardAssociation.DatabaseDataGuardAssociation(scope: Construct, id: string, config: DatabaseDataGuardAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig">DatabaseDataGuardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig">DatabaseDataGuardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds">resetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags">resetDatabaseDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags">resetDatabaseFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags">resetDbSystemDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags">resetDbSystemFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes">resetDbSystemSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains">resetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled">resetIsActiveDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId">resetPeerDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId">resetPeerDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName">resetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix">resetPeerSidPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId">resetPeerVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode">resetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions"></a>

```typescript
public putDataCollectionOptions(value: DatabaseDataGuardAssociationDataCollectionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseDataGuardAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetBackupNetworkNsgIds` <a name="resetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds"></a>

```typescript
public resetBackupNetworkNsgIds(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync"></a>

```typescript
public resetCreateAsync(): void
```

##### `resetDatabaseDefinedTags` <a name="resetDatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags"></a>

```typescript
public resetDatabaseDefinedTags(): void
```

##### `resetDatabaseFreeformTags` <a name="resetDatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags"></a>

```typescript
public resetDatabaseFreeformTags(): void
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId"></a>

```typescript
public resetDatabaseSoftwareImageId(): void
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions"></a>

```typescript
public resetDataCollectionOptions(): void
```

##### `resetDbSystemDefinedTags` <a name="resetDbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags"></a>

```typescript
public resetDbSystemDefinedTags(): void
```

##### `resetDbSystemFreeformTags` <a name="resetDbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags"></a>

```typescript
public resetDbSystemFreeformTags(): void
```

##### `resetDbSystemSecurityAttributes` <a name="resetDbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes"></a>

```typescript
public resetDbSystemSecurityAttributes(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetFaultDomains` <a name="resetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains"></a>

```typescript
public resetFaultDomains(): void
```

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsActiveDataGuardEnabled` <a name="resetIsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled"></a>

```typescript
public resetIsActiveDataGuardEnabled(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPeerDbHomeId` <a name="resetPeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId"></a>

```typescript
public resetPeerDbHomeId(): void
```

##### `resetPeerDbSystemId` <a name="resetPeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId"></a>

```typescript
public resetPeerDbSystemId(): void
```

##### `resetPeerDbUniqueName` <a name="resetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName"></a>

```typescript
public resetPeerDbUniqueName(): void
```

##### `resetPeerSidPrefix` <a name="resetPeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix"></a>

```typescript
public resetPeerSidPrefix(): void
```

##### `resetPeerVmClusterId` <a name="resetPeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId"></a>

```typescript
public resetPeerVmClusterId(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape"></a>

```typescript
public resetShape(): void
```

##### `resetStorageVolumePerformanceMode` <a name="resetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode"></a>

```typescript
public resetStorageVolumePerformanceMode(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDataGuardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag">applyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate">applyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId">peerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId">peerDataGuardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole">peerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput">backupNetworkNsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput">createAsyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput">creationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput">databaseAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput">databaseDefinedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput">databaseFreeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput">dbSystemDefinedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput">dbSystemFreeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput">dbSystemSecurityAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput">deleteStandbyDbHomeOnDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput">faultDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput">isActiveDataGuardEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput">peerDbHomeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput">peerDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput">peerDbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput">peerSidPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput">peerVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput">protectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput">storageVolumePerformanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput">transportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync">createAsync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword">databaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags">databaseDefinedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags">databaseFreeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags">dbSystemDefinedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags">dbSystemFreeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">dbSystemSecurityAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">deleteStandbyDbHomeOnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains">faultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">isActiveDataGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId">peerDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId">peerDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix">peerSidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId">peerVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType">transportType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag"></a>

```typescript
public readonly applyLag: string;
```

- *Type:* string

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate"></a>

```typescript
public readonly applyRate: string;
```

- *Type:* string

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: DatabaseDataGuardAssociationDataCollectionOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `peerDatabaseId`<sup>Required</sup> <a name="peerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```typescript
public readonly peerDatabaseId: string;
```

- *Type:* string

---

##### `peerDataGuardAssociationId`<sup>Required</sup> <a name="peerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```typescript
public readonly peerDataGuardAssociationId: string;
```

- *Type:* string

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole"></a>

```typescript
public readonly peerRole: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDataGuardAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `backupNetworkNsgIdsInput`<sup>Optional</sup> <a name="backupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput"></a>

```typescript
public readonly backupNetworkNsgIdsInput: string[];
```

- *Type:* string[]

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput"></a>

```typescript
public readonly createAsyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `creationTypeInput`<sup>Optional</sup> <a name="creationTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput"></a>

```typescript
public readonly creationTypeInput: string;
```

- *Type:* string

---

##### `databaseAdminPasswordInput`<sup>Optional</sup> <a name="databaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput"></a>

```typescript
public readonly databaseAdminPasswordInput: string;
```

- *Type:* string

---

##### `databaseDefinedTagsInput`<sup>Optional</sup> <a name="databaseDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput"></a>

```typescript
public readonly databaseDefinedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseFreeformTagsInput`<sup>Optional</sup> <a name="databaseFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput"></a>

```typescript
public readonly databaseFreeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput"></a>

```typescript
public readonly databaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput"></a>

```typescript
public readonly dataCollectionOptionsInput: DatabaseDataGuardAssociationDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `dbSystemDefinedTagsInput`<sup>Optional</sup> <a name="dbSystemDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput"></a>

```typescript
public readonly dbSystemDefinedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dbSystemFreeformTagsInput`<sup>Optional</sup> <a name="dbSystemFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput"></a>

```typescript
public readonly dbSystemFreeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dbSystemSecurityAttributesInput`<sup>Optional</sup> <a name="dbSystemSecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput"></a>

```typescript
public readonly dbSystemSecurityAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteStandbyDbHomeOnDeleteInput`<sup>Optional</sup> <a name="deleteStandbyDbHomeOnDeleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput"></a>

```typescript
public readonly deleteStandbyDbHomeOnDeleteInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `faultDomainsInput`<sup>Optional</sup> <a name="faultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput"></a>

```typescript
public readonly faultDomainsInput: string[];
```

- *Type:* string[]

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isActiveDataGuardEnabledInput`<sup>Optional</sup> <a name="isActiveDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput"></a>

```typescript
public readonly isActiveDataGuardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `peerDbHomeIdInput`<sup>Optional</sup> <a name="peerDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput"></a>

```typescript
public readonly peerDbHomeIdInput: string;
```

- *Type:* string

---

##### `peerDbSystemIdInput`<sup>Optional</sup> <a name="peerDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput"></a>

```typescript
public readonly peerDbSystemIdInput: string;
```

- *Type:* string

---

##### `peerDbUniqueNameInput`<sup>Optional</sup> <a name="peerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput"></a>

```typescript
public readonly peerDbUniqueNameInput: string;
```

- *Type:* string

---

##### `peerSidPrefixInput`<sup>Optional</sup> <a name="peerSidPrefixInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput"></a>

```typescript
public readonly peerSidPrefixInput: string;
```

- *Type:* string

---

##### `peerVmClusterIdInput`<sup>Optional</sup> <a name="peerVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput"></a>

```typescript
public readonly peerVmClusterIdInput: string;
```

- *Type:* string

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `protectionModeInput`<sup>Optional</sup> <a name="protectionModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput"></a>

```typescript
public readonly protectionModeInput: string;
```

- *Type:* string

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `storageVolumePerformanceModeInput`<sup>Optional</sup> <a name="storageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput"></a>

```typescript
public readonly storageVolumePerformanceModeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseDataGuardAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `transportTypeInput`<sup>Optional</sup> <a name="transportTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput"></a>

```typescript
public readonly transportTypeInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```typescript
public readonly backupNetworkNsgIds: string[];
```

- *Type:* string[]

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync"></a>

```typescript
public readonly createAsync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `databaseAdminPassword`<sup>Required</sup> <a name="databaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```typescript
public readonly databaseAdminPassword: string;
```

- *Type:* string

---

##### `databaseDefinedTags`<sup>Required</sup> <a name="databaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```typescript
public readonly databaseDefinedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseFreeformTags`<sup>Required</sup> <a name="databaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```typescript
public readonly databaseFreeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `dbSystemDefinedTags`<sup>Required</sup> <a name="dbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```typescript
public readonly dbSystemDefinedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dbSystemFreeformTags`<sup>Required</sup> <a name="dbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```typescript
public readonly dbSystemFreeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dbSystemSecurityAttributes`<sup>Required</sup> <a name="dbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```typescript
public readonly dbSystemSecurityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="deleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```typescript
public readonly deleteStandbyDbHomeOnDelete: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains"></a>

```typescript
public readonly faultDomains: string[];
```

- *Type:* string[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActiveDataGuardEnabled`<sup>Required</sup> <a name="isActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```typescript
public readonly isActiveDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `peerDbHomeId`<sup>Required</sup> <a name="peerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```typescript
public readonly peerDbHomeId: string;
```

- *Type:* string

---

##### `peerDbSystemId`<sup>Required</sup> <a name="peerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```typescript
public readonly peerDbSystemId: string;
```

- *Type:* string

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

---

##### `peerSidPrefix`<sup>Required</sup> <a name="peerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```typescript
public readonly peerSidPrefix: string;
```

- *Type:* string

---

##### `peerVmClusterId`<sup>Required</sup> <a name="peerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```typescript
public readonly peerVmClusterId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageVolumePerformanceMode`<sup>Required</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```typescript
public readonly storageVolumePerformanceMode: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `transportType`<sup>Required</sup> <a name="transportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType"></a>

```typescript
public readonly transportType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDataGuardAssociationConfig <a name="DatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.Initializer"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

const databaseDataGuardAssociationConfig: databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType">creationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword">databaseAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete">deleteStandbyDbHomeOnDelete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode">protectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType">transportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync">createAsync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags">databaseDefinedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags">databaseFreeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags">dbSystemDefinedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags">dbSystemFreeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes">dbSystemSecurityAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains">faultDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled">isActiveDataGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId">peerDbHomeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId">peerDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix">peerSidPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId">peerVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `databaseAdminPassword`<sup>Required</sup> <a name="databaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword"></a>

```typescript
public readonly databaseAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `deleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="deleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete"></a>

```typescript
public readonly deleteStandbyDbHomeOnDelete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `transportType`<sup>Required</sup> <a name="transportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType"></a>

```typescript
public readonly transportType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `backupNetworkNsgIds`<sup>Optional</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds"></a>

```typescript
public readonly backupNetworkNsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync"></a>

```typescript
public readonly createAsync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `databaseDefinedTags`<sup>Optional</sup> <a name="databaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags"></a>

```typescript
public readonly databaseDefinedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `databaseFreeformTags`<sup>Optional</sup> <a name="databaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags"></a>

```typescript
public readonly databaseFreeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: DatabaseDataGuardAssociationDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `dbSystemDefinedTags`<sup>Optional</sup> <a name="dbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags"></a>

```typescript
public readonly dbSystemDefinedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `dbSystemFreeformTags`<sup>Optional</sup> <a name="dbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags"></a>

```typescript
public readonly dbSystemFreeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `dbSystemSecurityAttributes`<sup>Optional</sup> <a name="dbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes"></a>

```typescript
public readonly dbSystemSecurityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains"></a>

```typescript
public readonly faultDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActiveDataGuardEnabled`<sup>Optional</sup> <a name="isActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled"></a>

```typescript
public readonly isActiveDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `peerDbHomeId`<sup>Optional</sup> <a name="peerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId"></a>

```typescript
public readonly peerDbHomeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `peerDbSystemId`<sup>Optional</sup> <a name="peerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId"></a>

```typescript
public readonly peerDbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `peerDbUniqueName`<sup>Optional</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName"></a>

```typescript
public readonly peerDbUniqueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `peerSidPrefix`<sup>Optional</sup> <a name="peerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix"></a>

```typescript
public readonly peerSidPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `peerVmClusterId`<sup>Optional</sup> <a name="peerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId"></a>

```typescript
public readonly peerVmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `storageVolumePerformanceMode`<sup>Optional</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode"></a>

```typescript
public readonly storageVolumePerformanceMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDataGuardAssociationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

### DatabaseDataGuardAssociationDataCollectionOptions <a name="DatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

const databaseDataGuardAssociationDataCollectionOptions: databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}.

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}.

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}.

---

### DatabaseDataGuardAssociationTimeouts <a name="DatabaseDataGuardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.Initializer"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

const databaseDataGuardAssociationTimeouts: databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

new databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```typescript
public resetIsDiagnosticsEventsEnabled(): void
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```typescript
public resetIsHealthMonitoringEnabled(): void
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```typescript
public resetIsIncidentLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```typescript
public readonly isDiagnosticsEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```typescript
public readonly isHealthMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```typescript
public readonly isIncidentLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDataGuardAssociationDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---


### DatabaseDataGuardAssociationTimeoutsOutputReference <a name="DatabaseDataGuardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseDataGuardAssociation } from 'rhizo-co-terraform-provider-oci'

new databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseDataGuardAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---



