# `databaseExadataInfrastructure` Submodule <a name="`databaseExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructure <a name="DatabaseExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure oci_database_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructure(scope: Construct, id: string, config: DatabaseExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig">DatabaseExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig">DatabaseExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts">putContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails">putNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile">resetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount">resetAdditionalStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts">resetContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy">resetCorporateProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync">resetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled">resetIsCpsOfflineReportEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment">resetIsMultiRackDeployment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile">resetMultiRackConfigurationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails">resetNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount">resetStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContacts` <a name="putContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts"></a>

```typescript
public putContacts(value: IResolvable | DatabaseExadataInfrastructureContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: DatabaseExadataInfrastructureMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `putNetworkBondingModeDetails` <a name="putNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails"></a>

```typescript
public putNetworkBondingModeDetails(value: DatabaseExadataInfrastructureNetworkBondingModeDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseExadataInfrastructureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---

##### `resetActivationFile` <a name="resetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile"></a>

```typescript
public resetActivationFile(): void
```

##### `resetAdditionalStorageCount` <a name="resetAdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount"></a>

```typescript
public resetAdditionalStorageCount(): void
```

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetContacts` <a name="resetContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts"></a>

```typescript
public resetContacts(): void
```

##### `resetCorporateProxy` <a name="resetCorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy"></a>

```typescript
public resetCorporateProxy(): void
```

##### `resetCreateAsync` <a name="resetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync"></a>

```typescript
public resetCreateAsync(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCpsOfflineReportEnabled` <a name="resetIsCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled"></a>

```typescript
public resetIsCpsOfflineReportEnabled(): void
```

##### `resetIsMultiRackDeployment` <a name="resetIsMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment"></a>

```typescript
public resetIsMultiRackDeployment(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMultiRackConfigurationFile` <a name="resetMultiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile"></a>

```typescript
public resetMultiRackConfigurationFile(): void
```

##### `resetNetworkBondingModeDetails` <a name="resetNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails"></a>

```typescript
public resetNetworkBondingModeDetails(): void
```

##### `resetStorageCount` <a name="resetStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount"></a>

```typescript
public resetStorageCount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount">activatedStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount">additionalComputeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel">additionalComputeSystemModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled">cpusEnabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber">csiNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion">dbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations">definedFileSystemConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus">maintenanceSloStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs">maxDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails">networkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber">rackSerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion">storageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput">activationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput">additionalStorageCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput">adminNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input">cloudControlPlaneServer1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input">cloudControlPlaneServer2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput">contactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput">corporateProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput">createAsyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput">dnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput">infiniBandNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput">isCpsOfflineReportEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput">isMultiRackDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput">multiRackConfigurationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput">netmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput">networkBondingModeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput">ntpServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput">storageCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile">activationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy">corporateProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync">createAsync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment">isMultiRackDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile">multiRackConfigurationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer">ntpServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount"></a>

```typescript
public readonly activatedStorageCount: number;
```

- *Type:* number

---

##### `additionalComputeCount`<sup>Required</sup> <a name="additionalComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount"></a>

```typescript
public readonly additionalComputeCount: number;
```

- *Type:* number

---

##### `additionalComputeSystemModel`<sup>Required</sup> <a name="additionalComputeSystemModel" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel"></a>

```typescript
public readonly additionalComputeSystemModel: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts"></a>

```typescript
public readonly contacts: DatabaseExadataInfrastructureContactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a>

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled"></a>

```typescript
public readonly cpusEnabled: number;
```

- *Type:* number

---

##### `csiNumber`<sup>Required</sup> <a name="csiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber"></a>

```typescript
public readonly csiNumber: string;
```

- *Type:* string

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion"></a>

```typescript
public readonly dbServerVersion: string;
```

- *Type:* string

---

##### `definedFileSystemConfigurations`<sup>Required</sup> <a name="definedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations"></a>

```typescript
public readonly definedFileSystemConfigurations: DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceSloStatus`<sup>Required</sup> <a name="maintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus"></a>

```typescript
public readonly maintenanceSloStatus: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DatabaseExadataInfrastructureMaintenanceWindowOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDataStorageInTbs`<sup>Required</sup> <a name="maxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs"></a>

```typescript
public readonly maxDataStorageInTbs: number;
```

- *Type:* number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs"></a>

```typescript
public readonly maxDbNodeStorageInGbs: number;
```

- *Type:* number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs"></a>

```typescript
public readonly maxMemoryInGbs: number;
```

- *Type:* number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion"></a>

```typescript
public readonly monthlyDbServerVersion: string;
```

- *Type:* string

---

##### `networkBondingModeDetails`<sup>Required</sup> <a name="networkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails"></a>

```typescript
public readonly networkBondingModeDetails: DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a>

---

##### `rackSerialNumber`<sup>Required</sup> <a name="rackSerialNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber"></a>

```typescript
public readonly rackSerialNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion"></a>

```typescript
public readonly storageServerVersion: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExadataInfrastructureTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a>

---

##### `activationFileInput`<sup>Optional</sup> <a name="activationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput"></a>

```typescript
public readonly activationFileInput: string;
```

- *Type:* string

---

##### `additionalStorageCountInput`<sup>Optional</sup> <a name="additionalStorageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput"></a>

```typescript
public readonly additionalStorageCountInput: number;
```

- *Type:* number

---

##### `adminNetworkCidrInput`<sup>Optional</sup> <a name="adminNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput"></a>

```typescript
public readonly adminNetworkCidrInput: string;
```

- *Type:* string

---

##### `cloudControlPlaneServer1Input`<sup>Optional</sup> <a name="cloudControlPlaneServer1Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input"></a>

```typescript
public readonly cloudControlPlaneServer1Input: string;
```

- *Type:* string

---

##### `cloudControlPlaneServer2Input`<sup>Optional</sup> <a name="cloudControlPlaneServer2Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input"></a>

```typescript
public readonly cloudControlPlaneServer2Input: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `contactsInput`<sup>Optional</sup> <a name="contactsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput"></a>

```typescript
public readonly contactsInput: IResolvable | DatabaseExadataInfrastructureContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]

---

##### `corporateProxyInput`<sup>Optional</sup> <a name="corporateProxyInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput"></a>

```typescript
public readonly corporateProxyInput: string;
```

- *Type:* string

---

##### `createAsyncInput`<sup>Optional</sup> <a name="createAsyncInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput"></a>

```typescript
public readonly createAsyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput"></a>

```typescript
public readonly dnsServerInput: string[];
```

- *Type:* string[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infiniBandNetworkCidrInput`<sup>Optional</sup> <a name="infiniBandNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput"></a>

```typescript
public readonly infiniBandNetworkCidrInput: string;
```

- *Type:* string

---

##### `isCpsOfflineReportEnabledInput`<sup>Optional</sup> <a name="isCpsOfflineReportEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput"></a>

```typescript
public readonly isCpsOfflineReportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMultiRackDeploymentInput`<sup>Optional</sup> <a name="isMultiRackDeploymentInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput"></a>

```typescript
public readonly isMultiRackDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: DatabaseExadataInfrastructureMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `multiRackConfigurationFileInput`<sup>Optional</sup> <a name="multiRackConfigurationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput"></a>

```typescript
public readonly multiRackConfigurationFileInput: string;
```

- *Type:* string

---

##### `netmaskInput`<sup>Optional</sup> <a name="netmaskInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput"></a>

```typescript
public readonly netmaskInput: string;
```

- *Type:* string

---

##### `networkBondingModeDetailsInput`<sup>Optional</sup> <a name="networkBondingModeDetailsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput"></a>

```typescript
public readonly networkBondingModeDetailsInput: DatabaseExadataInfrastructureNetworkBondingModeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `ntpServerInput`<sup>Optional</sup> <a name="ntpServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput"></a>

```typescript
public readonly ntpServerInput: string[];
```

- *Type:* string[]

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput"></a>

```typescript
public readonly storageCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseExadataInfrastructureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `activationFile`<sup>Required</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile"></a>

```typescript
public readonly activationFile: string;
```

- *Type:* string

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr"></a>

```typescript
public readonly adminNetworkCidr: string;
```

- *Type:* string

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1"></a>

```typescript
public readonly cloudControlPlaneServer1: string;
```

- *Type:* string

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2"></a>

```typescript
public readonly cloudControlPlaneServer2: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `corporateProxy`<sup>Required</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy"></a>

```typescript
public readonly corporateProxy: string;
```

- *Type:* string

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync"></a>

```typescript
public readonly createAsync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr"></a>

```typescript
public readonly infiniBandNetworkCidr: string;
```

- *Type:* string

---

##### `isCpsOfflineReportEnabled`<sup>Required</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled"></a>

```typescript
public readonly isCpsOfflineReportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMultiRackDeployment`<sup>Required</sup> <a name="isMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment"></a>

```typescript
public readonly isMultiRackDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiRackConfigurationFile`<sup>Required</sup> <a name="multiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile"></a>

```typescript
public readonly multiRackConfigurationFile: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer"></a>

```typescript
public readonly ntpServer: string[];
```

- *Type:* string[]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureConfig <a name="DatabaseExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureConfig: databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway">gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask">netmask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer">ntpServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile">activationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount">computeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts">contacts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy">corporateProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync">createAsync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment">isMultiRackDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile">multiRackConfigurationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails">networkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | network_bonding_mode_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount">storageCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr"></a>

```typescript
public readonly adminNetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}.

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1"></a>

```typescript
public readonly cloudControlPlaneServer1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}.

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2"></a>

```typescript
public readonly cloudControlPlaneServer2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}.

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}.

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr"></a>

```typescript
public readonly infiniBandNetworkCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}.

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}.

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer"></a>

```typescript
public readonly ntpServer: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}.

---

##### `activationFile`<sup>Optional</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile"></a>

```typescript
public readonly activationFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}.

---

##### `additionalStorageCount`<sup>Optional</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}.

---

##### `contacts`<sup>Optional</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts"></a>

```typescript
public readonly contacts: IResolvable | DatabaseExadataInfrastructureContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#contacts DatabaseExadataInfrastructure#contacts}

---

##### `corporateProxy`<sup>Optional</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy"></a>

```typescript
public readonly corporateProxy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}.

---

##### `createAsync`<sup>Optional</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync"></a>

```typescript
public readonly createAsync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCpsOfflineReportEnabled`<sup>Optional</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled"></a>

```typescript
public readonly isCpsOfflineReportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}.

---

##### `isMultiRackDeployment`<sup>Optional</sup> <a name="isMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment"></a>

```typescript
public readonly isMultiRackDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DatabaseExadataInfrastructureMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#maintenance_window DatabaseExadataInfrastructure#maintenance_window}

---

##### `multiRackConfigurationFile`<sup>Optional</sup> <a name="multiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile"></a>

```typescript
public readonly multiRackConfigurationFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}.

---

##### `networkBondingModeDetails`<sup>Optional</sup> <a name="networkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails"></a>

```typescript
public readonly networkBondingModeDetails: DatabaseExadataInfrastructureNetworkBondingModeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

network_bonding_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#network_bonding_mode_details DatabaseExadataInfrastructure#network_bonding_mode_details}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExadataInfrastructureTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#timeouts DatabaseExadataInfrastructure#timeouts}

---

### DatabaseExadataInfrastructureContacts <a name="DatabaseExadataInfrastructureContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureContacts: databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated">isContactMosValidated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}.

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

##### `isContactMosValidated`<sup>Optional</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated"></a>

```typescript
public readonly isContactMosValidated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}.

---

### DatabaseExadataInfrastructureDefinedFileSystemConfigurations <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureDefinedFileSystemConfigurations: databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations = { ... }
```


### DatabaseExadataInfrastructureMaintenanceWindow <a name="DatabaseExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureMaintenanceWindow: databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu">skipRu</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#days_of_week DatabaseExadataInfrastructure#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}.

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months"></a>

```typescript
public readonly months: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#months DatabaseExadataInfrastructure#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}.

---

##### `skipRu`<sup>Optional</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu"></a>

```typescript
public readonly skipRu: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}.

---

### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureMaintenanceWindowDaysOfWeek: databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureMaintenanceWindowMonths: databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureNetworkBondingModeDetails <a name="DatabaseExadataInfrastructureNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureNetworkBondingModeDetails: databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode">backupNetworkBondingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode">clientNetworkBondingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode">drNetworkBondingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}. |

---

##### `backupNetworkBondingMode`<sup>Optional</sup> <a name="backupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode"></a>

```typescript
public readonly backupNetworkBondingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}.

---

##### `clientNetworkBondingMode`<sup>Optional</sup> <a name="clientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode"></a>

```typescript
public readonly clientNetworkBondingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}.

---

##### `drNetworkBondingMode`<sup>Optional</sup> <a name="drNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode"></a>

```typescript
public readonly drNetworkBondingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}.

---

### DatabaseExadataInfrastructureTimeouts <a name="DatabaseExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseExadataInfrastructureTimeouts: databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureContactsList <a name="DatabaseExadataInfrastructureContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get"></a>

```typescript
public get(index: number): DatabaseExadataInfrastructureContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>[]

---


### DatabaseExadataInfrastructureContactsOutputReference <a name="DatabaseExadataInfrastructureContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated">resetIsContactMosValidated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsContactMosValidated` <a name="resetIsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated"></a>

```typescript
public resetIsContactMosValidated(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput">isContactMosValidatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated">isContactMosValidated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary">isPrimary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `isContactMosValidatedInput`<sup>Optional</sup> <a name="isContactMosValidatedInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput"></a>

```typescript
public readonly isContactMosValidatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput"></a>

```typescript
public readonly isPrimaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `isContactMosValidated`<sup>Required</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated"></a>

```typescript
public readonly isContactMosValidated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureContacts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts">DatabaseExadataInfrastructureContacts</a>

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get"></a>

```typescript
public get(index: number): DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">isBackupPartition</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable">isResizable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">minSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isBackupPartition`<sup>Required</sup> <a name="isBackupPartition" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```typescript
public readonly isBackupPartition: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isResizable`<sup>Required</sup> <a name="isResizable" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```typescript
public readonly isResizable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minSizeGb`<sup>Required</sup> <a name="minSizeGb" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```typescript
public readonly minSizeGb: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseExadataInfrastructureDefinedFileSystemConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowMonths;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths">putMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu">resetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```typescript
public putDaysOfWeek(value: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]

---

##### `putMonths` <a name="putMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths"></a>

```typescript
public putMonths(value: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowMonths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]

---

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```typescript
public resetCustomActionTimeoutInMins(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```typescript
public resetIsCustomActionTimeoutEnabled(): void
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled"></a>

```typescript
public resetIsMonthlyPatchingEnabled(): void
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```typescript
public resetLeadTimeInWeeks(): void
```

##### `resetMonths` <a name="resetMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```typescript
public resetPatchingMode(): void
```

##### `resetPreference` <a name="resetPreference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetSkipRu` <a name="resetSkipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu"></a>

```typescript
public resetSkipRu(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput">skipRuInput</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.IResolvable \| boolean \| cdktf.IResolvable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: DatabaseExadataInfrastructureMaintenanceWindowMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```typescript
public readonly customActionTimeoutInMinsInput: number;
```

- *Type:* number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek</a>[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```typescript
public readonly isCustomActionTimeoutEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```typescript
public readonly isMonthlyPatchingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```typescript
public readonly leadTimeInWeeksInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: IResolvable | DatabaseExadataInfrastructureMaintenanceWindowMonths[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths">DatabaseExadataInfrastructureMaintenanceWindowMonths</a>[]

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```typescript
public readonly patchingModeInput: string;
```

- *Type:* string

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `skipRuInput`<sup>Optional</sup> <a name="skipRuInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput"></a>

```typescript
public readonly skipRuInput: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: IResolvable | boolean | IResolvable[];
```

- *Type:* cdktf.IResolvable | boolean | cdktf.IResolvable[]

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseExadataInfrastructureMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference <a name="DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode">resetBackupNetworkBondingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode">resetClientNetworkBondingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode">resetDrNetworkBondingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupNetworkBondingMode` <a name="resetBackupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode"></a>

```typescript
public resetBackupNetworkBondingMode(): void
```

##### `resetClientNetworkBondingMode` <a name="resetClientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode"></a>

```typescript
public resetClientNetworkBondingMode(): void
```

##### `resetDrNetworkBondingMode` <a name="resetDrNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode"></a>

```typescript
public resetDrNetworkBondingMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput">backupNetworkBondingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput">clientNetworkBondingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput">drNetworkBondingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode">backupNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode">clientNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode">drNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupNetworkBondingModeInput`<sup>Optional</sup> <a name="backupNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput"></a>

```typescript
public readonly backupNetworkBondingModeInput: string;
```

- *Type:* string

---

##### `clientNetworkBondingModeInput`<sup>Optional</sup> <a name="clientNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput"></a>

```typescript
public readonly clientNetworkBondingModeInput: string;
```

- *Type:* string

---

##### `drNetworkBondingModeInput`<sup>Optional</sup> <a name="drNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput"></a>

```typescript
public readonly drNetworkBondingModeInput: string;
```

- *Type:* string

---

##### `backupNetworkBondingMode`<sup>Required</sup> <a name="backupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode"></a>

```typescript
public readonly backupNetworkBondingMode: string;
```

- *Type:* string

---

##### `clientNetworkBondingMode`<sup>Required</sup> <a name="clientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode"></a>

```typescript
public readonly clientNetworkBondingMode: string;
```

- *Type:* string

---

##### `drNetworkBondingMode`<sup>Required</sup> <a name="drNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode"></a>

```typescript
public readonly drNetworkBondingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseExadataInfrastructureNetworkBondingModeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---


### DatabaseExadataInfrastructureTimeoutsOutputReference <a name="DatabaseExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExadataInfrastructureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---



