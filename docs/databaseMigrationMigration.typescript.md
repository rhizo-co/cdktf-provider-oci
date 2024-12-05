# `databaseMigrationMigration` Submodule <a name="`databaseMigrationMigration` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationMigration <a name="DatabaseMigrationMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration oci_database_migration_migration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigration(scope: Construct, id: string, config: DatabaseMigrationMigrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig">DatabaseMigrationMigrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig">DatabaseMigrationMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters">putAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings">putAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails">putDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects">putExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails">putGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails">putHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects">putIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings">putInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters">resetAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings">resetAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData">resetBulkIncludeExcludeData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails">resetDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects">resetExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails">resetGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails">resetHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects">resetIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings">resetInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId">resetSourceContainerDatabaseConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedParameters` <a name="putAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters"></a>

```typescript
public putAdvancedParameters(value: IResolvable | DatabaseMigrationMigrationAdvancedParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]

---

##### `putAdvisorSettings` <a name="putAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings"></a>

```typescript
public putAdvisorSettings(value: DatabaseMigrationMigrationAdvisorSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `putDataTransferMediumDetails` <a name="putDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails"></a>

```typescript
public putDataTransferMediumDetails(value: DatabaseMigrationMigrationDataTransferMediumDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `putExcludeObjects` <a name="putExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects"></a>

```typescript
public putExcludeObjects(value: IResolvable | DatabaseMigrationMigrationExcludeObjects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]

---

##### `putGgsDetails` <a name="putGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails"></a>

```typescript
public putGgsDetails(value: DatabaseMigrationMigrationGgsDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `putHubDetails` <a name="putHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails"></a>

```typescript
public putHubDetails(value: DatabaseMigrationMigrationHubDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `putIncludeObjects` <a name="putIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects"></a>

```typescript
public putIncludeObjects(value: IResolvable | DatabaseMigrationMigrationIncludeObjects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]

---

##### `putInitialLoadSettings` <a name="putInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings"></a>

```typescript
public putInitialLoadSettings(value: DatabaseMigrationMigrationInitialLoadSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseMigrationMigrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---

##### `resetAdvancedParameters` <a name="resetAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters"></a>

```typescript
public resetAdvancedParameters(): void
```

##### `resetAdvisorSettings` <a name="resetAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings"></a>

```typescript
public resetAdvisorSettings(): void
```

##### `resetBulkIncludeExcludeData` <a name="resetBulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData"></a>

```typescript
public resetBulkIncludeExcludeData(): void
```

##### `resetDataTransferMediumDetails` <a name="resetDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails"></a>

```typescript
public resetDataTransferMediumDetails(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExcludeObjects` <a name="resetExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects"></a>

```typescript
public resetExcludeObjects(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetGgsDetails` <a name="resetGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails"></a>

```typescript
public resetGgsDetails(): void
```

##### `resetHubDetails` <a name="resetHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails"></a>

```typescript
public resetHubDetails(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeObjects` <a name="resetIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects"></a>

```typescript
public resetIncludeObjects(): void
```

##### `resetInitialLoadSettings` <a name="resetInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings"></a>

```typescript
public resetInitialLoadSettings(): void
```

##### `resetSourceContainerDatabaseConnectionId` <a name="resetSourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId"></a>

```typescript
public resetSourceContainerDatabaseConnectionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

databaseMigrationMigration.DatabaseMigrationMigration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMigrationMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMigrationMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters">advancedParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings">advisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails">dataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects">excludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId">executingJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails">ggsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails">hubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects">includeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings">initialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration">timeLastMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter">waitAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput">advancedParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput">advisorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput">bulkIncludeExcludeDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput">databaseCombinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput">dataTransferMediumDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput">excludeObjectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput">ggsDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput">hubDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput">includeObjectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput">initialLoadSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput">sourceContainerDatabaseConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput">sourceDatabaseConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput">targetDatabaseConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData">bulkIncludeExcludeData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination">databaseCombination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId">sourceContainerDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId">sourceDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId">targetDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedParameters`<sup>Required</sup> <a name="advancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters"></a>

```typescript
public readonly advancedParameters: DatabaseMigrationMigrationAdvancedParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a>

---

##### `advisorSettings`<sup>Required</sup> <a name="advisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings"></a>

```typescript
public readonly advisorSettings: DatabaseMigrationMigrationAdvisorSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a>

---

##### `dataTransferMediumDetails`<sup>Required</sup> <a name="dataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails"></a>

```typescript
public readonly dataTransferMediumDetails: DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a>

---

##### `excludeObjects`<sup>Required</sup> <a name="excludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects"></a>

```typescript
public readonly excludeObjects: DatabaseMigrationMigrationExcludeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a>

---

##### `executingJobId`<sup>Required</sup> <a name="executingJobId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId"></a>

```typescript
public readonly executingJobId: string;
```

- *Type:* string

---

##### `ggsDetails`<sup>Required</sup> <a name="ggsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails"></a>

```typescript
public readonly ggsDetails: DatabaseMigrationMigrationGgsDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a>

---

##### `hubDetails`<sup>Required</sup> <a name="hubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails"></a>

```typescript
public readonly hubDetails: DatabaseMigrationMigrationHubDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a>

---

##### `includeObjects`<sup>Required</sup> <a name="includeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects"></a>

```typescript
public readonly includeObjects: DatabaseMigrationMigrationIncludeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a>

---

##### `initialLoadSettings`<sup>Required</sup> <a name="initialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings"></a>

```typescript
public readonly initialLoadSettings: DatabaseMigrationMigrationInitialLoadSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastMigration`<sup>Required</sup> <a name="timeLastMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration"></a>

```typescript
public readonly timeLastMigration: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMigrationMigrationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `waitAfter`<sup>Required</sup> <a name="waitAfter" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter"></a>

```typescript
public readonly waitAfter: string;
```

- *Type:* string

---

##### `advancedParametersInput`<sup>Optional</sup> <a name="advancedParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput"></a>

```typescript
public readonly advancedParametersInput: IResolvable | DatabaseMigrationMigrationAdvancedParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]

---

##### `advisorSettingsInput`<sup>Optional</sup> <a name="advisorSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput"></a>

```typescript
public readonly advisorSettingsInput: DatabaseMigrationMigrationAdvisorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `bulkIncludeExcludeDataInput`<sup>Optional</sup> <a name="bulkIncludeExcludeDataInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput"></a>

```typescript
public readonly bulkIncludeExcludeDataInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseCombinationInput`<sup>Optional</sup> <a name="databaseCombinationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput"></a>

```typescript
public readonly databaseCombinationInput: string;
```

- *Type:* string

---

##### `dataTransferMediumDetailsInput`<sup>Optional</sup> <a name="dataTransferMediumDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput"></a>

```typescript
public readonly dataTransferMediumDetailsInput: DatabaseMigrationMigrationDataTransferMediumDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `excludeObjectsInput`<sup>Optional</sup> <a name="excludeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput"></a>

```typescript
public readonly excludeObjectsInput: IResolvable | DatabaseMigrationMigrationExcludeObjects[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ggsDetailsInput`<sup>Optional</sup> <a name="ggsDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput"></a>

```typescript
public readonly ggsDetailsInput: DatabaseMigrationMigrationGgsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `hubDetailsInput`<sup>Optional</sup> <a name="hubDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput"></a>

```typescript
public readonly hubDetailsInput: DatabaseMigrationMigrationHubDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeObjectsInput`<sup>Optional</sup> <a name="includeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput"></a>

```typescript
public readonly includeObjectsInput: IResolvable | DatabaseMigrationMigrationIncludeObjects[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]

---

##### `initialLoadSettingsInput`<sup>Optional</sup> <a name="initialLoadSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput"></a>

```typescript
public readonly initialLoadSettingsInput: DatabaseMigrationMigrationInitialLoadSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `sourceContainerDatabaseConnectionIdInput`<sup>Optional</sup> <a name="sourceContainerDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput"></a>

```typescript
public readonly sourceContainerDatabaseConnectionIdInput: string;
```

- *Type:* string

---

##### `sourceDatabaseConnectionIdInput`<sup>Optional</sup> <a name="sourceDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput"></a>

```typescript
public readonly sourceDatabaseConnectionIdInput: string;
```

- *Type:* string

---

##### `targetDatabaseConnectionIdInput`<sup>Optional</sup> <a name="targetDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput"></a>

```typescript
public readonly targetDatabaseConnectionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseMigrationMigrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `bulkIncludeExcludeData`<sup>Required</sup> <a name="bulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData"></a>

```typescript
public readonly bulkIncludeExcludeData: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseCombination`<sup>Required</sup> <a name="databaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination"></a>

```typescript
public readonly databaseCombination: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceContainerDatabaseConnectionId`<sup>Required</sup> <a name="sourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId"></a>

```typescript
public readonly sourceContainerDatabaseConnectionId: string;
```

- *Type:* string

---

##### `sourceDatabaseConnectionId`<sup>Required</sup> <a name="sourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId"></a>

```typescript
public readonly sourceDatabaseConnectionId: string;
```

- *Type:* string

---

##### `targetDatabaseConnectionId`<sup>Required</sup> <a name="targetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId"></a>

```typescript
public readonly targetDatabaseConnectionId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationMigrationAdvancedParameters <a name="DatabaseMigrationMigrationAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationAdvancedParameters: databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}. |

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}.

---

### DatabaseMigrationMigrationAdvisorSettings <a name="DatabaseMigrationMigrationAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationAdvisorSettings: databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors">isIgnoreErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor">isSkipAdvisor</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}. |

---

##### `isIgnoreErrors`<sup>Optional</sup> <a name="isIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors"></a>

```typescript
public readonly isIgnoreErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}.

---

##### `isSkipAdvisor`<sup>Optional</sup> <a name="isSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor"></a>

```typescript
public readonly isSkipAdvisor: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}.

---

### DatabaseMigrationMigrationConfig <a name="DatabaseMigrationMigrationConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationConfig: databaseMigrationMigration.DatabaseMigrationMigrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination">databaseCombination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId">sourceDatabaseConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId">targetDatabaseConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters">advancedParameters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]</code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings">advisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData">bulkIncludeExcludeData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails">dataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects">excludeObjects</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]</code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails">ggsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails">hubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects">includeObjects</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]</code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings">initialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId">sourceContainerDatabaseConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `databaseCombination`<sup>Required</sup> <a name="databaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination"></a>

```typescript
public readonly databaseCombination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `sourceDatabaseConnectionId`<sup>Required</sup> <a name="sourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId"></a>

```typescript
public readonly sourceDatabaseConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `targetDatabaseConnectionId`<sup>Required</sup> <a name="targetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId"></a>

```typescript
public readonly targetDatabaseConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `advancedParameters`<sup>Optional</sup> <a name="advancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters"></a>

```typescript
public readonly advancedParameters: IResolvable | DatabaseMigrationMigrationAdvancedParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `advisorSettings`<sup>Optional</sup> <a name="advisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings"></a>

```typescript
public readonly advisorSettings: DatabaseMigrationMigrationAdvisorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `bulkIncludeExcludeData`<sup>Optional</sup> <a name="bulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData"></a>

```typescript
public readonly bulkIncludeExcludeData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `dataTransferMediumDetails`<sup>Optional</sup> <a name="dataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails"></a>

```typescript
public readonly dataTransferMediumDetails: DatabaseMigrationMigrationDataTransferMediumDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `excludeObjects`<sup>Optional</sup> <a name="excludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects"></a>

```typescript
public readonly excludeObjects: IResolvable | DatabaseMigrationMigrationExcludeObjects[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `ggsDetails`<sup>Optional</sup> <a name="ggsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails"></a>

```typescript
public readonly ggsDetails: DatabaseMigrationMigrationGgsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `hubDetails`<sup>Optional</sup> <a name="hubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails"></a>

```typescript
public readonly hubDetails: DatabaseMigrationMigrationHubDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeObjects`<sup>Optional</sup> <a name="includeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects"></a>

```typescript
public readonly includeObjects: IResolvable | DatabaseMigrationMigrationIncludeObjects[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `initialLoadSettings`<sup>Optional</sup> <a name="initialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings"></a>

```typescript
public readonly initialLoadSettings: DatabaseMigrationMigrationInitialLoadSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `sourceContainerDatabaseConnectionId`<sup>Optional</sup> <a name="sourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId"></a>

```typescript
public readonly sourceContainerDatabaseConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMigrationMigrationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}

---

### DatabaseMigrationMigrationDataTransferMediumDetails <a name="DatabaseMigrationMigrationDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationDataTransferMediumDetails: databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket">objectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | object_storage_bucket block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId">sharedStorageMountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | target block. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `objectStorageBucket`<sup>Optional</sup> <a name="objectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket"></a>

```typescript
public readonly objectStorageBucket: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

object_storage_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}.

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}.

---

##### `sharedStorageMountTargetId`<sup>Optional</sup> <a name="sharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId"></a>

```typescript
public readonly sharedStorageMountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source"></a>

```typescript
public readonly source: DatabaseMigrationMigrationDataTransferMediumDetailsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target"></a>

```typescript
public readonly target: DatabaseMigrationMigrationDataTransferMediumDetailsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}

---

### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket: databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsSource <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationDataTransferMediumDetailsSource: databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome">ociHome</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation">walletLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `ociHome`<sup>Optional</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome"></a>

```typescript
public readonly ociHome: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `walletLocation`<sup>Optional</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation"></a>

```typescript
public readonly walletLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsTarget <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationDataTransferMediumDetailsTarget: databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome">ociHome</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation">walletLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `ociHome`<sup>Optional</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome"></a>

```typescript
public readonly ociHome: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `walletLocation`<sup>Optional</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation"></a>

```typescript
public readonly walletLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationExcludeObjects <a name="DatabaseMigrationMigrationExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationExcludeObjects: databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `isOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication"></a>

```typescript
public readonly isOmitExcludedTableFromReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationGgsDetails <a name="DatabaseMigrationMigrationGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationGgsDetails: databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag">acceptableLag</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | replicat block. |

---

##### `acceptableLag`<sup>Optional</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag"></a>

```typescript
public readonly acceptableLag: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract"></a>

```typescript
public readonly extract: DatabaseMigrationMigrationGgsDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat"></a>

```typescript
public readonly replicat: DatabaseMigrationMigrationGgsDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationGgsDetailsExtract <a name="DatabaseMigrationMigrationGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationGgsDetailsExtract: databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration">longTransDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `longTransDuration`<sup>Optional</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration"></a>

```typescript
public readonly longTransDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationGgsDetailsGgsDeployment <a name="DatabaseMigrationMigrationGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationGgsDetailsGgsDeployment: databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment = { ... }
```


### DatabaseMigrationMigrationGgsDetailsReplicat <a name="DatabaseMigrationMigrationGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationGgsDetailsReplicat: databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetails <a name="DatabaseMigrationMigrationHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationHubDetails: databaseMigrationMigration.DatabaseMigrationMigrationHubDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials">restAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | rest_admin_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag">acceptableLag</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId">computeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | replicat block. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}.

---

##### `restAdminCredentials`<sup>Required</sup> <a name="restAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials"></a>

```typescript
public readonly restAdminCredentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

rest_admin_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}.

---

##### `acceptableLag`<sup>Optional</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag"></a>

```typescript
public readonly acceptableLag: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `computeId`<sup>Optional</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId"></a>

```typescript
public readonly computeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}.

---

##### `extract`<sup>Optional</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract"></a>

```typescript
public readonly extract: DatabaseMigrationMigrationHubDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `replicat`<sup>Optional</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat"></a>

```typescript
public readonly replicat: DatabaseMigrationMigrationHubDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationHubDetailsExtract <a name="DatabaseMigrationMigrationHubDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationHubDetailsExtract: databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration">longTransDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `longTransDuration`<sup>Optional</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration"></a>

```typescript
public readonly longTransDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsReplicat <a name="DatabaseMigrationMigrationHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationHubDetailsReplicat: databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `performanceProfile`<sup>Optional</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsRestAdminCredentials <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationHubDetailsRestAdminCredentials: databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}.

---

### DatabaseMigrationMigrationIncludeObjects <a name="DatabaseMigrationMigrationIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationIncludeObjects: databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `isOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication"></a>

```typescript
public readonly isOmitExcludedTableFromReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettings <a name="DatabaseMigrationMigrationInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationInitialLoadSettings: databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode">jobMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility">compatibility</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters">dataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | data_pump_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject">exportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | export_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors">handleGrantErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject">importDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | import_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent">isConsistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects">isIgnoreExistingObjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc">isTzUtc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps">metadataRemaps</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]</code> | metadata_remaps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility">primaryKeyCompatibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails">tablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | tablespace_details block. |

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode"></a>

```typescript
public readonly jobMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}.

---

##### `compatibility`<sup>Optional</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility"></a>

```typescript
public readonly compatibility: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}.

---

##### `dataPumpParameters`<sup>Optional</sup> <a name="dataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters"></a>

```typescript
public readonly dataPumpParameters: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

data_pump_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}

---

##### `exportDirectoryObject`<sup>Optional</sup> <a name="exportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject"></a>

```typescript
public readonly exportDirectoryObject: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

export_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}

---

##### `handleGrantErrors`<sup>Optional</sup> <a name="handleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors"></a>

```typescript
public readonly handleGrantErrors: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}.

---

##### `importDirectoryObject`<sup>Optional</sup> <a name="importDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject"></a>

```typescript
public readonly importDirectoryObject: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

import_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}

---

##### `isConsistent`<sup>Optional</sup> <a name="isConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent"></a>

```typescript
public readonly isConsistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}.

---

##### `isIgnoreExistingObjects`<sup>Optional</sup> <a name="isIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects"></a>

```typescript
public readonly isIgnoreExistingObjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}.

---

##### `isTzUtc`<sup>Optional</sup> <a name="isTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc"></a>

```typescript
public readonly isTzUtc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}.

---

##### `metadataRemaps`<sup>Optional</sup> <a name="metadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps"></a>

```typescript
public readonly metadataRemaps: IResolvable | DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]

metadata_remaps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}

---

##### `primaryKeyCompatibility`<sup>Optional</sup> <a name="primaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility"></a>

```typescript
public readonly primaryKeyCompatibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}.

---

##### `tablespaceDetails`<sup>Optional</sup> <a name="tablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails"></a>

```typescript
public readonly tablespaceDetails: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

tablespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}

---

### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationInitialLoadSettingsDataPumpParameters: databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate">estimate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters">excludeParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree">exportParallelismDegree</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree">importParallelismDegree</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster">isCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction">tableExistsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}. |

---

##### `estimate`<sup>Optional</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate"></a>

```typescript
public readonly estimate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}.

---

##### `excludeParameters`<sup>Optional</sup> <a name="excludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters"></a>

```typescript
public readonly excludeParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}.

---

##### `exportParallelismDegree`<sup>Optional</sup> <a name="exportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree"></a>

```typescript
public readonly exportParallelismDegree: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}.

---

##### `importParallelismDegree`<sup>Optional</sup> <a name="importParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree"></a>

```typescript
public readonly importParallelismDegree: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}.

---

##### `isCluster`<sup>Optional</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster"></a>

```typescript
public readonly isCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}.

---

##### `tableExistsAction`<sup>Optional</sup> <a name="tableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction"></a>

```typescript
public readonly tableExistsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}.

---

### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationInitialLoadSettingsExportDirectoryObject: databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationInitialLoadSettingsImportDirectoryObject: databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationInitialLoadSettingsMetadataRemaps: databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue">newValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue">oldValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `newValue`<sup>Optional</sup> <a name="newValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue"></a>

```typescript
public readonly newValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}.

---

##### `oldValue`<sup>Optional</sup> <a name="oldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue"></a>

```typescript
public readonly oldValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationInitialLoadSettingsTablespaceDetails: databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs">blockSizeInKbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs">extendSizeInMbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate">isAutoCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile">isBigFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget">remapTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}. |

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}.

---

##### `blockSizeInKbs`<sup>Optional</sup> <a name="blockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs"></a>

```typescript
public readonly blockSizeInKbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}.

---

##### `extendSizeInMbs`<sup>Optional</sup> <a name="extendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs"></a>

```typescript
public readonly extendSizeInMbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}.

---

##### `isAutoCreate`<sup>Optional</sup> <a name="isAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate"></a>

```typescript
public readonly isAutoCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}.

---

##### `isBigFile`<sup>Optional</sup> <a name="isBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile"></a>

```typescript
public readonly isBigFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}.

---

##### `remapTarget`<sup>Optional</sup> <a name="remapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget"></a>

```typescript
public readonly remapTarget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}.

---

### DatabaseMigrationMigrationTimeouts <a name="DatabaseMigrationMigrationTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

const databaseMigrationMigrationTimeouts: databaseMigrationMigration.DatabaseMigrationMigrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationMigrationAdvancedParametersList <a name="DatabaseMigrationMigrationAdvancedParametersList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get"></a>

```typescript
public get(index: number): DatabaseMigrationMigrationAdvancedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationAdvancedParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>[]

---


### DatabaseMigrationMigrationAdvancedParametersOutputReference <a name="DatabaseMigrationMigrationAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationAdvancedParameters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters">DatabaseMigrationMigrationAdvancedParameters</a>

---


### DatabaseMigrationMigrationAdvisorSettingsOutputReference <a name="DatabaseMigrationMigrationAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors">resetIsIgnoreErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor">resetIsSkipAdvisor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsIgnoreErrors` <a name="resetIsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors"></a>

```typescript
public resetIsIgnoreErrors(): void
```

##### `resetIsSkipAdvisor` <a name="resetIsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor"></a>

```typescript
public resetIsSkipAdvisor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput">isIgnoreErrorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput">isSkipAdvisorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors">isIgnoreErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor">isSkipAdvisor</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isIgnoreErrorsInput`<sup>Optional</sup> <a name="isIgnoreErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput"></a>

```typescript
public readonly isIgnoreErrorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSkipAdvisorInput`<sup>Optional</sup> <a name="isSkipAdvisorInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput"></a>

```typescript
public readonly isSkipAdvisorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIgnoreErrors`<sup>Required</sup> <a name="isIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```typescript
public readonly isIgnoreErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSkipAdvisor`<sup>Required</sup> <a name="isSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```typescript
public readonly isSkipAdvisor: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationAdvisorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket">putObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket">resetObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId">resetSharedStorageMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectStorageBucket` <a name="putObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket"></a>

```typescript
public putObjectStorageBucket(value: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource"></a>

```typescript
public putSource(value: DatabaseMigrationMigrationDataTransferMediumDetailsSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `putTarget` <a name="putTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget"></a>

```typescript
public putTarget(value: DatabaseMigrationMigrationDataTransferMediumDetailsTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetObjectStorageBucket` <a name="resetObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket"></a>

```typescript
public resetObjectStorageBucket(): void
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```

##### `resetSharedStorageMountTargetId` <a name="resetSharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId"></a>

```typescript
public resetSharedStorageMountTargetId(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket">objectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput">objectStorageBucketInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput">sharedStorageMountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">sharedStorageMountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectStorageBucket`<sup>Required</sup> <a name="objectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```typescript
public readonly objectStorageBucket: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source"></a>

```typescript
public readonly source: DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target"></a>

```typescript
public readonly target: DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a>

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectStorageBucketInput`<sup>Optional</sup> <a name="objectStorageBucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput"></a>

```typescript
public readonly objectStorageBucketInput: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `sharedStorageMountTargetIdInput`<sup>Optional</sup> <a name="sharedStorageMountTargetIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput"></a>

```typescript
public readonly sharedStorageMountTargetIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: DatabaseMigrationMigrationDataTransferMediumDetailsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: DatabaseMigrationMigrationDataTransferMediumDetailsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `sharedStorageMountTargetId`<sup>Required</sup> <a name="sharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```typescript
public readonly sharedStorageMountTargetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationDataTransferMediumDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome">resetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation">resetWalletLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOciHome` <a name="resetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome"></a>

```typescript
public resetOciHome(): void
```

##### `resetWalletLocation` <a name="resetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation"></a>

```typescript
public resetWalletLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput">ociHomeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput">walletLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome">ociHome</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation">walletLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `ociHomeInput`<sup>Optional</sup> <a name="ociHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput"></a>

```typescript
public readonly ociHomeInput: string;
```

- *Type:* string

---

##### `walletLocationInput`<sup>Optional</sup> <a name="walletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput"></a>

```typescript
public readonly walletLocationInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `ociHome`<sup>Required</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```typescript
public readonly ociHome: string;
```

- *Type:* string

---

##### `walletLocation`<sup>Required</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```typescript
public readonly walletLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationDataTransferMediumDetailsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome">resetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation">resetWalletLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOciHome` <a name="resetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome"></a>

```typescript
public resetOciHome(): void
```

##### `resetWalletLocation` <a name="resetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation"></a>

```typescript
public resetWalletLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput">ociHomeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput">walletLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome">ociHome</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation">walletLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `ociHomeInput`<sup>Optional</sup> <a name="ociHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput"></a>

```typescript
public readonly ociHomeInput: string;
```

- *Type:* string

---

##### `walletLocationInput`<sup>Optional</sup> <a name="walletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput"></a>

```typescript
public readonly walletLocationInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `ociHome`<sup>Required</sup> <a name="ociHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```typescript
public readonly ociHome: string;
```

- *Type:* string

---

##### `walletLocation`<sup>Required</sup> <a name="walletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```typescript
public readonly walletLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationDataTransferMediumDetailsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---


### DatabaseMigrationMigrationExcludeObjectsList <a name="DatabaseMigrationMigrationExcludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get"></a>

```typescript
public get(index: number): DatabaseMigrationMigrationExcludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationExcludeObjects[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>[]

---


### DatabaseMigrationMigrationExcludeObjectsOutputReference <a name="DatabaseMigrationMigrationExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">resetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOmitExcludedTableFromReplication` <a name="resetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```typescript
public resetIsOmitExcludedTableFromReplication(): void
```

##### `resetOwner` <a name="resetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetSchema` <a name="resetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">isOmitExcludedTableFromReplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```typescript
public readonly isOmitExcludedTableFromReplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `isOmitExcludedTableFromReplication`<sup>Required</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```typescript
public readonly isOmitExcludedTableFromReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationExcludeObjects;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects">DatabaseMigrationMigrationExcludeObjects</a>

---


### DatabaseMigrationMigrationGgsDetailsExtractOutputReference <a name="DatabaseMigrationMigrationGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration">resetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLongTransDuration` <a name="resetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration"></a>

```typescript
public resetLongTransDuration(): void
```

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile"></a>

```typescript
public resetPerformanceProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput">longTransDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration">longTransDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `longTransDurationInput`<sup>Optional</sup> <a name="longTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput"></a>

```typescript
public readonly longTransDurationInput: number;
```

- *Type:* number

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput"></a>

```typescript
public readonly performanceProfileInput: string;
```

- *Type:* string

---

##### `longTransDuration`<sup>Required</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```typescript
public readonly longTransDuration: number;
```

- *Type:* number

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationGgsDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentList <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get"></a>

```typescript
public get(index: number): DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">ggsAdminCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `ggsAdminCredentialsSecretId`<sup>Required</sup> <a name="ggsAdminCredentialsSecretId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```typescript
public readonly ggsAdminCredentialsSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationGgsDetailsGgsDeployment;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a>

---


### DatabaseMigrationMigrationGgsDetailsOutputReference <a name="DatabaseMigrationMigrationGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat">putReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag">resetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat">resetReplicat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtract` <a name="putExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract"></a>

```typescript
public putExtract(value: DatabaseMigrationMigrationGgsDetailsExtract): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `putReplicat` <a name="putReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat"></a>

```typescript
public putReplicat(value: DatabaseMigrationMigrationGgsDetailsReplicat): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `resetAcceptableLag` <a name="resetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag"></a>

```typescript
public resetAcceptableLag(): void
```

##### `resetExtract` <a name="resetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract"></a>

```typescript
public resetExtract(): void
```

##### `resetReplicat` <a name="resetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat"></a>

```typescript
public resetReplicat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment">ggsDeployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput">acceptableLagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput">extractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput">replicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag">acceptableLag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract"></a>

```typescript
public readonly extract: DatabaseMigrationMigrationGgsDetailsExtractOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a>

---

##### `ggsDeployment`<sup>Required</sup> <a name="ggsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment"></a>

```typescript
public readonly ggsDeployment: DatabaseMigrationMigrationGgsDetailsGgsDeploymentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat"></a>

```typescript
public readonly replicat: DatabaseMigrationMigrationGgsDetailsReplicatOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a>

---

##### `acceptableLagInput`<sup>Optional</sup> <a name="acceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput"></a>

```typescript
public readonly acceptableLagInput: number;
```

- *Type:* number

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput"></a>

```typescript
public readonly extractInput: DatabaseMigrationMigrationGgsDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `replicatInput`<sup>Optional</sup> <a name="replicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput"></a>

```typescript
public readonly replicatInput: DatabaseMigrationMigrationGgsDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `acceptableLag`<sup>Required</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag"></a>

```typescript
public readonly acceptableLag: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationGgsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---


### DatabaseMigrationMigrationGgsDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```typescript
public resetPerformanceProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```typescript
public readonly performanceProfileInput: string;
```

- *Type:* string

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationGgsDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsExtractOutputReference <a name="DatabaseMigrationMigrationHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration">resetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLongTransDuration` <a name="resetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration"></a>

```typescript
public resetLongTransDuration(): void
```

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile"></a>

```typescript
public resetPerformanceProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput">longTransDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration">longTransDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `longTransDurationInput`<sup>Optional</sup> <a name="longTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput"></a>

```typescript
public readonly longTransDurationInput: number;
```

- *Type:* number

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput"></a>

```typescript
public readonly performanceProfileInput: string;
```

- *Type:* string

---

##### `longTransDuration`<sup>Required</sup> <a name="longTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration"></a>

```typescript
public readonly longTransDuration: number;
```

- *Type:* number

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationHubDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---


### DatabaseMigrationMigrationHubDetailsOutputReference <a name="DatabaseMigrationMigrationHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract">putExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat">putReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials">putRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag">resetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId">resetComputeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract">resetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat">resetReplicat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtract` <a name="putExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract"></a>

```typescript
public putExtract(value: DatabaseMigrationMigrationHubDetailsExtract): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `putReplicat` <a name="putReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat"></a>

```typescript
public putReplicat(value: DatabaseMigrationMigrationHubDetailsReplicat): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `putRestAdminCredentials` <a name="putRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials"></a>

```typescript
public putRestAdminCredentials(value: DatabaseMigrationMigrationHubDetailsRestAdminCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `resetAcceptableLag` <a name="resetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag"></a>

```typescript
public resetAcceptableLag(): void
```

##### `resetComputeId` <a name="resetComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId"></a>

```typescript
public resetComputeId(): void
```

##### `resetExtract` <a name="resetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract"></a>

```typescript
public resetExtract(): void
```

##### `resetReplicat` <a name="resetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat"></a>

```typescript
public resetReplicat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat">replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials">restAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput">acceptableLagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput">computeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput">extractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput">replicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput">restAdminCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag">acceptableLag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId">computeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract"></a>

```typescript
public readonly extract: DatabaseMigrationMigrationHubDetailsExtractOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a>

---

##### `replicat`<sup>Required</sup> <a name="replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat"></a>

```typescript
public readonly replicat: DatabaseMigrationMigrationHubDetailsReplicatOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a>

---

##### `restAdminCredentials`<sup>Required</sup> <a name="restAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials"></a>

```typescript
public readonly restAdminCredentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a>

---

##### `acceptableLagInput`<sup>Optional</sup> <a name="acceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput"></a>

```typescript
public readonly acceptableLagInput: number;
```

- *Type:* number

---

##### `computeIdInput`<sup>Optional</sup> <a name="computeIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput"></a>

```typescript
public readonly computeIdInput: string;
```

- *Type:* string

---

##### `extractInput`<sup>Optional</sup> <a name="extractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput"></a>

```typescript
public readonly extractInput: DatabaseMigrationMigrationHubDetailsExtract;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `replicatInput`<sup>Optional</sup> <a name="replicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput"></a>

```typescript
public readonly replicatInput: DatabaseMigrationMigrationHubDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `restAdminCredentialsInput`<sup>Optional</sup> <a name="restAdminCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput"></a>

```typescript
public readonly restAdminCredentialsInput: DatabaseMigrationMigrationHubDetailsRestAdminCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `acceptableLag`<sup>Required</sup> <a name="acceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag"></a>

```typescript
public readonly acceptableLag: number;
```

- *Type:* number

---

##### `computeId`<sup>Required</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId"></a>

```typescript
public readonly computeId: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationHubDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---


### DatabaseMigrationMigrationHubDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile">resetPerformanceProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerformanceProfile` <a name="resetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```typescript
public resetPerformanceProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput">performanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile">performanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `performanceProfileInput`<sup>Optional</sup> <a name="performanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```typescript
public readonly performanceProfileInput: string;
```

- *Type:* string

---

##### `performanceProfile`<sup>Required</sup> <a name="performanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```typescript
public readonly performanceProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationHubDetailsReplicat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationHubDetailsRestAdminCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---


### DatabaseMigrationMigrationIncludeObjectsList <a name="DatabaseMigrationMigrationIncludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get"></a>

```typescript
public get(index: number): DatabaseMigrationMigrationIncludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationIncludeObjects[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>[]

---


### DatabaseMigrationMigrationIncludeObjectsOutputReference <a name="DatabaseMigrationMigrationIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">resetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOmitExcludedTableFromReplication` <a name="resetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```typescript
public resetIsOmitExcludedTableFromReplication(): void
```

##### `resetOwner` <a name="resetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetSchema` <a name="resetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">isOmitExcludedTableFromReplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">isOmitExcludedTableFromReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="isOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```typescript
public readonly isOmitExcludedTableFromReplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `isOmitExcludedTableFromReplication`<sup>Required</sup> <a name="isOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```typescript
public readonly isOmitExcludedTableFromReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationIncludeObjects;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects">DatabaseMigrationMigrationIncludeObjects</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate">resetEstimate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters">resetExcludeParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree">resetExportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree">resetImportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster">resetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction">resetTableExistsAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEstimate` <a name="resetEstimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate"></a>

```typescript
public resetEstimate(): void
```

##### `resetExcludeParameters` <a name="resetExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters"></a>

```typescript
public resetExcludeParameters(): void
```

##### `resetExportParallelismDegree` <a name="resetExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree"></a>

```typescript
public resetExportParallelismDegree(): void
```

##### `resetImportParallelismDegree` <a name="resetImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree"></a>

```typescript
public resetImportParallelismDegree(): void
```

##### `resetIsCluster` <a name="resetIsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster"></a>

```typescript
public resetIsCluster(): void
```

##### `resetTableExistsAction` <a name="resetTableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction"></a>

```typescript
public resetTableExistsAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput">estimateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput">excludeParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput">exportParallelismDegreeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput">importParallelismDegreeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput">isClusterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput">tableExistsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">estimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">excludeParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">exportParallelismDegree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">importParallelismDegree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">isCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">tableExistsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimateInput`<sup>Optional</sup> <a name="estimateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput"></a>

```typescript
public readonly estimateInput: string;
```

- *Type:* string

---

##### `excludeParametersInput`<sup>Optional</sup> <a name="excludeParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput"></a>

```typescript
public readonly excludeParametersInput: string[];
```

- *Type:* string[]

---

##### `exportParallelismDegreeInput`<sup>Optional</sup> <a name="exportParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput"></a>

```typescript
public readonly exportParallelismDegreeInput: number;
```

- *Type:* number

---

##### `importParallelismDegreeInput`<sup>Optional</sup> <a name="importParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput"></a>

```typescript
public readonly importParallelismDegreeInput: number;
```

- *Type:* number

---

##### `isClusterInput`<sup>Optional</sup> <a name="isClusterInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput"></a>

```typescript
public readonly isClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableExistsActionInput`<sup>Optional</sup> <a name="tableExistsActionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput"></a>

```typescript
public readonly tableExistsActionInput: string;
```

- *Type:* string

---

##### `estimate`<sup>Required</sup> <a name="estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```typescript
public readonly estimate: string;
```

- *Type:* string

---

##### `excludeParameters`<sup>Required</sup> <a name="excludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```typescript
public readonly excludeParameters: string[];
```

- *Type:* string[]

---

##### `exportParallelismDegree`<sup>Required</sup> <a name="exportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```typescript
public readonly exportParallelismDegree: number;
```

- *Type:* number

---

##### `importParallelismDegree`<sup>Required</sup> <a name="importParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```typescript
public readonly importParallelismDegree: number;
```

- *Type:* number

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```typescript
public readonly isCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableExistsAction`<sup>Required</sup> <a name="tableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```typescript
public readonly tableExistsAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get"></a>

```typescript
public get(index: number): DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue">resetNewValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue">resetOldValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewValue` <a name="resetNewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue"></a>

```typescript
public resetNewValue(): void
```

##### `resetOldValue` <a name="resetOldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue"></a>

```typescript
public resetOldValue(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput">newValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput">oldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">newValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">oldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newValueInput`<sup>Optional</sup> <a name="newValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput"></a>

```typescript
public readonly newValueInput: string;
```

- *Type:* string

---

##### `oldValueInput`<sup>Optional</sup> <a name="oldValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput"></a>

```typescript
public readonly oldValueInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `newValue`<sup>Required</sup> <a name="newValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```typescript
public readonly newValue: string;
```

- *Type:* string

---

##### `oldValue`<sup>Required</sup> <a name="oldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```typescript
public readonly oldValue: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters">putDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject">putExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject">putImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps">putMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails">putTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility">resetCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters">resetDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject">resetExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors">resetHandleGrantErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject">resetImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent">resetIsConsistent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects">resetIsIgnoreExistingObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc">resetIsTzUtc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps">resetMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility">resetPrimaryKeyCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails">resetTablespaceDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataPumpParameters` <a name="putDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters"></a>

```typescript
public putDataPumpParameters(value: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `putExportDirectoryObject` <a name="putExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject"></a>

```typescript
public putExportDirectoryObject(value: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `putImportDirectoryObject` <a name="putImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject"></a>

```typescript
public putImportDirectoryObject(value: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `putMetadataRemaps` <a name="putMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps"></a>

```typescript
public putMetadataRemaps(value: IResolvable | DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]

---

##### `putTablespaceDetails` <a name="putTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails"></a>

```typescript
public putTablespaceDetails(value: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `resetCompatibility` <a name="resetCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility"></a>

```typescript
public resetCompatibility(): void
```

##### `resetDataPumpParameters` <a name="resetDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters"></a>

```typescript
public resetDataPumpParameters(): void
```

##### `resetExportDirectoryObject` <a name="resetExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject"></a>

```typescript
public resetExportDirectoryObject(): void
```

##### `resetHandleGrantErrors` <a name="resetHandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors"></a>

```typescript
public resetHandleGrantErrors(): void
```

##### `resetImportDirectoryObject` <a name="resetImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject"></a>

```typescript
public resetImportDirectoryObject(): void
```

##### `resetIsConsistent` <a name="resetIsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent"></a>

```typescript
public resetIsConsistent(): void
```

##### `resetIsIgnoreExistingObjects` <a name="resetIsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects"></a>

```typescript
public resetIsIgnoreExistingObjects(): void
```

##### `resetIsTzUtc` <a name="resetIsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc"></a>

```typescript
public resetIsTzUtc(): void
```

##### `resetMetadataRemaps` <a name="resetMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps"></a>

```typescript
public resetMetadataRemaps(): void
```

##### `resetPrimaryKeyCompatibility` <a name="resetPrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility"></a>

```typescript
public resetPrimaryKeyCompatibility(): void
```

##### `resetTablespaceDetails` <a name="resetTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails"></a>

```typescript
public resetTablespaceDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters">dataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject">exportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject">importDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps">metadataRemaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails">tablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput">compatibilityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput">dataPumpParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput">exportDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput">handleGrantErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput">importDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput">isConsistentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput">isIgnoreExistingObjectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput">isTzUtcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput">jobModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput">metadataRemapsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput">primaryKeyCompatibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput">tablespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility">compatibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors">handleGrantErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent">isConsistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">isIgnoreExistingObjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc">isTzUtc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode">jobMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">primaryKeyCompatibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataPumpParameters`<sup>Required</sup> <a name="dataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```typescript
public readonly dataPumpParameters: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a>

---

##### `exportDirectoryObject`<sup>Required</sup> <a name="exportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```typescript
public readonly exportDirectoryObject: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a>

---

##### `importDirectoryObject`<sup>Required</sup> <a name="importDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```typescript
public readonly importDirectoryObject: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a>

---

##### `metadataRemaps`<sup>Required</sup> <a name="metadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```typescript
public readonly metadataRemaps: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a>

---

##### `tablespaceDetails`<sup>Required</sup> <a name="tablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```typescript
public readonly tablespaceDetails: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a>

---

##### `compatibilityInput`<sup>Optional</sup> <a name="compatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput"></a>

```typescript
public readonly compatibilityInput: string[];
```

- *Type:* string[]

---

##### `dataPumpParametersInput`<sup>Optional</sup> <a name="dataPumpParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput"></a>

```typescript
public readonly dataPumpParametersInput: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `exportDirectoryObjectInput`<sup>Optional</sup> <a name="exportDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput"></a>

```typescript
public readonly exportDirectoryObjectInput: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `handleGrantErrorsInput`<sup>Optional</sup> <a name="handleGrantErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput"></a>

```typescript
public readonly handleGrantErrorsInput: string;
```

- *Type:* string

---

##### `importDirectoryObjectInput`<sup>Optional</sup> <a name="importDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput"></a>

```typescript
public readonly importDirectoryObjectInput: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `isConsistentInput`<sup>Optional</sup> <a name="isConsistentInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput"></a>

```typescript
public readonly isConsistentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIgnoreExistingObjectsInput`<sup>Optional</sup> <a name="isIgnoreExistingObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput"></a>

```typescript
public readonly isIgnoreExistingObjectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTzUtcInput`<sup>Optional</sup> <a name="isTzUtcInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput"></a>

```typescript
public readonly isTzUtcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobModeInput`<sup>Optional</sup> <a name="jobModeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput"></a>

```typescript
public readonly jobModeInput: string;
```

- *Type:* string

---

##### `metadataRemapsInput`<sup>Optional</sup> <a name="metadataRemapsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput"></a>

```typescript
public readonly metadataRemapsInput: IResolvable | DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps</a>[]

---

##### `primaryKeyCompatibilityInput`<sup>Optional</sup> <a name="primaryKeyCompatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput"></a>

```typescript
public readonly primaryKeyCompatibilityInput: string;
```

- *Type:* string

---

##### `tablespaceDetailsInput`<sup>Optional</sup> <a name="tablespaceDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput"></a>

```typescript
public readonly tablespaceDetailsInput: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility"></a>

```typescript
public readonly compatibility: string[];
```

- *Type:* string[]

---

##### `handleGrantErrors`<sup>Required</sup> <a name="handleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```typescript
public readonly handleGrantErrors: string;
```

- *Type:* string

---

##### `isConsistent`<sup>Required</sup> <a name="isConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent"></a>

```typescript
public readonly isConsistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIgnoreExistingObjects`<sup>Required</sup> <a name="isIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```typescript
public readonly isIgnoreExistingObjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTzUtc`<sup>Required</sup> <a name="isTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```typescript
public readonly isTzUtc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode"></a>

```typescript
public readonly jobMode: string;
```

- *Type:* string

---

##### `primaryKeyCompatibility`<sup>Required</sup> <a name="primaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```typescript
public readonly primaryKeyCompatibility: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationInitialLoadSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs">resetBlockSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs">resetExtendSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate">resetIsAutoCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile">resetIsBigFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget">resetRemapTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockSizeInKbs` <a name="resetBlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs"></a>

```typescript
public resetBlockSizeInKbs(): void
```

##### `resetExtendSizeInMbs` <a name="resetExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs"></a>

```typescript
public resetExtendSizeInMbs(): void
```

##### `resetIsAutoCreate` <a name="resetIsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate"></a>

```typescript
public resetIsAutoCreate(): void
```

##### `resetIsBigFile` <a name="resetIsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile"></a>

```typescript
public resetIsBigFile(): void
```

##### `resetRemapTarget` <a name="resetRemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget"></a>

```typescript
public resetRemapTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput">blockSizeInKbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput">extendSizeInMbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput">isAutoCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput">isBigFileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput">remapTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">blockSizeInKbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">extendSizeInMbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">isAutoCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">isBigFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">remapTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockSizeInKbsInput`<sup>Optional</sup> <a name="blockSizeInKbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput"></a>

```typescript
public readonly blockSizeInKbsInput: string;
```

- *Type:* string

---

##### `extendSizeInMbsInput`<sup>Optional</sup> <a name="extendSizeInMbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput"></a>

```typescript
public readonly extendSizeInMbsInput: number;
```

- *Type:* number

---

##### `isAutoCreateInput`<sup>Optional</sup> <a name="isAutoCreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput"></a>

```typescript
public readonly isAutoCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isBigFileInput`<sup>Optional</sup> <a name="isBigFileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput"></a>

```typescript
public readonly isBigFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remapTargetInput`<sup>Optional</sup> <a name="remapTargetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput"></a>

```typescript
public readonly remapTargetInput: string;
```

- *Type:* string

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `blockSizeInKbs`<sup>Required</sup> <a name="blockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```typescript
public readonly blockSizeInKbs: string;
```

- *Type:* string

---

##### `extendSizeInMbs`<sup>Required</sup> <a name="extendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```typescript
public readonly extendSizeInMbs: number;
```

- *Type:* number

---

##### `isAutoCreate`<sup>Required</sup> <a name="isAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```typescript
public readonly isAutoCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isBigFile`<sup>Required</sup> <a name="isBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```typescript
public readonly isBigFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remapTarget`<sup>Required</sup> <a name="remapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```typescript
public readonly remapTarget: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---


### DatabaseMigrationMigrationTimeoutsOutputReference <a name="DatabaseMigrationMigrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationMigration } from 'rhizo-co-terraform-provider-oci'

new databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationMigrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---



