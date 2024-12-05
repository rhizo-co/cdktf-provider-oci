# `databaseManagementExternalExadataInfrastructure` Submodule <a name="`databaseManagementExternalExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataInfrastructure <a name="DatabaseManagementExternalExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure oci_database_management_external_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure(scope: Construct, id: string, config: DatabaseManagementExternalExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig">DatabaseManagementExternalExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig">DatabaseManagementExternalExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDiscoveryKey">resetDiscoveryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetStorageServerNames">resetStorageServerNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementExternalExadataInfrastructureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDiscoveryKey` <a name="resetDiscoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDiscoveryKey"></a>

```typescript
public resetDiscoveryKey(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetStorageServerNames` <a name="resetStorageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetStorageServerNames"></a>

```typescript
public resetStorageServerNames(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseCompartments">databaseCompartments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseSystems">databaseSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.rackSize">rackSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageGrid">storageGrid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList">DatabaseManagementExternalExadataInfrastructureStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIdsInput">dbSystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKeyInput">discoveryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNamesInput">storageServerNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIds">dbSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKey">discoveryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNames">storageServerNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `databaseCompartments`<sup>Required</sup> <a name="databaseCompartments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseCompartments"></a>

```typescript
public readonly databaseCompartments: string[];
```

- *Type:* string[]

---

##### `databaseSystems`<sup>Required</sup> <a name="databaseSystems" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseSystems"></a>

```typescript
public readonly databaseSystems: DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a>

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `rackSize`<sup>Required</sup> <a name="rackSize" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.rackSize"></a>

```typescript
public readonly rackSize: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageGrid`<sup>Required</sup> <a name="storageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageGrid"></a>

```typescript
public readonly storageGrid: DatabaseManagementExternalExadataInfrastructureStorageGridList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList">DatabaseManagementExternalExadataInfrastructureStorageGridList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbSystemIdsInput`<sup>Optional</sup> <a name="dbSystemIdsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIdsInput"></a>

```typescript
public readonly dbSystemIdsInput: string[];
```

- *Type:* string[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `discoveryKeyInput`<sup>Optional</sup> <a name="discoveryKeyInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKeyInput"></a>

```typescript
public readonly discoveryKeyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `storageServerNamesInput`<sup>Optional</sup> <a name="storageServerNamesInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNamesInput"></a>

```typescript
public readonly storageServerNamesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementExternalExadataInfrastructureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIds"></a>

```typescript
public readonly dbSystemIds: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `discoveryKey`<sup>Required</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKey"></a>

```typescript
public readonly discoveryKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `storageServerNames`<sup>Required</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNames"></a>

```typescript
public readonly storageServerNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataInfrastructureConfig <a name="DatabaseManagementExternalExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataInfrastructureConfig: databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dbSystemIds">dbSystemIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.discoveryKey">discoveryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.storageServerNames">storageServerNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}.

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dbSystemIds"></a>

```typescript
public readonly dbSystemIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}.

---

##### `discoveryKey`<sup>Optional</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.discoveryKey"></a>

```typescript
public readonly discoveryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}.

---

##### `storageServerNames`<sup>Optional</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.storageServerNames"></a>

```typescript
public readonly storageServerNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataInfrastructureTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#timeouts DatabaseManagementExternalExadataInfrastructure#timeouts}

---

### DatabaseManagementExternalExadataInfrastructureDatabaseSystems <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystems" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataInfrastructureDatabaseSystems: databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems = { ... }
```


### DatabaseManagementExternalExadataInfrastructureStorageGrid <a name="DatabaseManagementExternalExadataInfrastructureStorageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataInfrastructureStorageGrid: databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid = { ... }
```


### DatabaseManagementExternalExadataInfrastructureTimeouts <a name="DatabaseManagementExternalExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataInfrastructureTimeouts: databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get"></a>

```typescript
public get(index: number): DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems">DatabaseManagementExternalExadataInfrastructureDatabaseSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementExternalExadataInfrastructureDatabaseSystems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems">DatabaseManagementExternalExadataInfrastructureDatabaseSystems</a>

---


### DatabaseManagementExternalExadataInfrastructureStorageGridList <a name="DatabaseManagementExternalExadataInfrastructureStorageGridList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get"></a>

```typescript
public get(index: number): DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference <a name="DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount">serverCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid">DatabaseManagementExternalExadataInfrastructureStorageGrid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount"></a>

```typescript
public readonly serverCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementExternalExadataInfrastructureStorageGrid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid">DatabaseManagementExternalExadataInfrastructureStorageGrid</a>

---


### DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataInfrastructure } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementExternalExadataInfrastructureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

---



