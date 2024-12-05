# `mysqlMysqlBackup` Submodule <a name="`mysqlMysqlBackup` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlBackup <a name="MysqlMysqlBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup oci_mysql_mysql_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackup(scope: Construct, id: string, config?: MysqlMysqlBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig">MysqlMysqlBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig">MysqlMysqlBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary">putDbSystemSnapshotSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetBackupType">resetBackupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemSnapshotSummary">resetDbSystemSnapshotSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbSystemSnapshotSummary` <a name="putDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary"></a>

```typescript
public putDbSystemSnapshotSummary(value: IResolvable | MysqlMysqlBackupDbSystemSnapshotSummary[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails"></a>

```typescript
public putSourceDetails(value: MysqlMysqlBackupSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts"></a>

```typescript
public putTimeouts(value: MysqlMysqlBackupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

---

##### `resetBackupType` <a name="resetBackupType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetBackupType"></a>

```typescript
public resetBackupType(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDbSystemSnapshotSummary` <a name="resetDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemSnapshotSummary"></a>

```typescript
public resetDbSystemSnapshotSummary(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetSourceDetails"></a>

```typescript
public resetSourceDetails(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlBackup.MysqlMysqlBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MysqlMysqlBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlMysqlBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlMysqlBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupSizeInGbs">backupSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshot">dbSystemSnapshot</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList">MysqlMysqlBackupDbSystemSnapshotList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummary">dbSystemSnapshotSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList">MysqlMysqlBackupDbSystemSnapshotSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.immediateSourceBackupId">immediateSourceBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.originalSourceBackupId">originalSourceBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference">MysqlMysqlBackupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCopyCreated">timeCopyCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference">MysqlMysqlBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupTypeInput">backupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummaryInput">dbSystemSnapshotSummaryInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupSizeInGbs`<sup>Required</sup> <a name="backupSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupSizeInGbs"></a>

```typescript
public readonly backupSizeInGbs: number;
```

- *Type:* number

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dbSystemSnapshot`<sup>Required</sup> <a name="dbSystemSnapshot" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshot"></a>

```typescript
public readonly dbSystemSnapshot: MysqlMysqlBackupDbSystemSnapshotList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList">MysqlMysqlBackupDbSystemSnapshotList</a>

---

##### `dbSystemSnapshotSummary`<sup>Required</sup> <a name="dbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummary"></a>

```typescript
public readonly dbSystemSnapshotSummary: MysqlMysqlBackupDbSystemSnapshotSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList">MysqlMysqlBackupDbSystemSnapshotSummaryList</a>

---

##### `immediateSourceBackupId`<sup>Required</sup> <a name="immediateSourceBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.immediateSourceBackupId"></a>

```typescript
public readonly immediateSourceBackupId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `originalSourceBackupId`<sup>Required</sup> <a name="originalSourceBackupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.originalSourceBackupId"></a>

```typescript
public readonly originalSourceBackupId: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: MysqlMysqlBackupSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference">MysqlMysqlBackupSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCopyCreated`<sup>Required</sup> <a name="timeCopyCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCopyCreated"></a>

```typescript
public readonly timeCopyCreated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlMysqlBackupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference">MysqlMysqlBackupTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupTypeInput"></a>

```typescript
public readonly backupTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `dbSystemSnapshotSummaryInput`<sup>Optional</sup> <a name="dbSystemSnapshotSummaryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummaryInput"></a>

```typescript
public readonly dbSystemSnapshotSummaryInput: IResolvable | MysqlMysqlBackupDbSystemSnapshotSummary[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetailsInput"></a>

```typescript
public readonly sourceDetailsInput: MysqlMysqlBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MysqlMysqlBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlBackupConfig <a name="MysqlMysqlBackupConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupConfig: mysqlMysqlBackup.MysqlMysqlBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.backupType">backupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemSnapshotSummary">dbSystemSnapshotSummary</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]</code> | db_system_snapshot_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}.

---

##### `dbSystemSnapshotSummary`<sup>Optional</sup> <a name="dbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemSnapshotSummary"></a>

```typescript
public readonly dbSystemSnapshotSummary: IResolvable | MysqlMysqlBackupDbSystemSnapshotSummary[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]

db_system_snapshot_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_snapshot_summary MysqlMysqlBackup#db_system_snapshot_summary}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}.

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: MysqlMysqlBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#source_details MysqlMysqlBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlMysqlBackupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#timeouts MysqlMysqlBackup#timeouts}

---

### MysqlMysqlBackupDbSystemSnapshot <a name="MysqlMysqlBackupDbSystemSnapshot" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshot: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotBackupPolicy <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotBackupPolicy: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotDataStorage <a name="MysqlMysqlBackupDbSystemSnapshotDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotDataStorage: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicy <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotDeletionPolicy: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotEndpoints <a name="MysqlMysqlBackupDbSystemSnapshotEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotEndpoints: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotMaintenance <a name="MysqlMysqlBackupDbSystemSnapshotMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotMaintenance: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotSecureConnections <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotSecureConnections: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections = { ... }
```


### MysqlMysqlBackupDbSystemSnapshotSummary <a name="MysqlMysqlBackupDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupDbSystemSnapshotSummary: mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

### MysqlMysqlBackupSourceDetails <a name="MysqlMysqlBackupSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupSourceDetails: mysqlMysqlBackup.MysqlMysqlBackupSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}. |

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

### MysqlMysqlBackupTimeouts <a name="MysqlMysqlBackupTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

const mysqlMysqlBackupTimeouts: mysqlMysqlBackup.MysqlMysqlBackupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlBackupDbSystemSnapshotBackupPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy"></a>

```typescript
public readonly pitrPolicy: MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList</a>

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotDataStorageList <a name="MysqlMysqlBackupDbSystemSnapshotDataStorageList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage">MysqlMysqlBackupDbSystemSnapshotDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```typescript
public readonly allocatedStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```typescript
public readonly dataStorageSizeLimitInGbs: number;
```

- *Type:* number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```typescript
public readonly isAutoExpandStorageEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```typescript
public readonly maxStorageSizeInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotDataStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage">MysqlMysqlBackupDbSystemSnapshotDataStorage</a>

---


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy">MysqlMysqlBackupDbSystemSnapshotDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```typescript
public readonly automaticBackupRetention: string;
```

- *Type:* string

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup"></a>

```typescript
public readonly finalBackup: string;
```

- *Type:* string

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```typescript
public readonly isDeleteProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotDeletionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy">MysqlMysqlBackupDbSystemSnapshotDeletionPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotEndpointsList <a name="MysqlMysqlBackupDbSystemSnapshotEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints">MysqlMysqlBackupDbSystemSnapshotEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints">MysqlMysqlBackupDbSystemSnapshotEndpoints</a>

---


### MysqlMysqlBackupDbSystemSnapshotList <a name="MysqlMysqlBackupDbSystemSnapshotList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotMaintenanceList <a name="MysqlMysqlBackupDbSystemSnapshotMaintenanceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance">MysqlMysqlBackupDbSystemSnapshotMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotMaintenance;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance">MysqlMysqlBackupDbSystemSnapshotMaintenance</a>

---


### MysqlMysqlBackupDbSystemSnapshotOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.crashRecovery">crashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.databaseManagement">databaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList">MysqlMysqlBackupDbSystemSnapshotDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList">MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList">MysqlMysqlBackupDbSystemSnapshotEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList">MysqlMysqlBackupDbSystemSnapshotMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList">MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot">MysqlMysqlBackupDbSystemSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: MysqlMysqlBackupDbSystemSnapshotBackupPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.crashRecovery"></a>

```typescript
public readonly crashRecovery: string;
```

- *Type:* string

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string;
```

- *Type:* string

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorage"></a>

```typescript
public readonly dataStorage: MysqlMysqlBackupDbSystemSnapshotDataStorageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList">MysqlMysqlBackupDbSystemSnapshotDataStorageList</a>

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList">MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: MysqlMysqlBackupDbSystemSnapshotEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList">MysqlMysqlBackupDbSystemSnapshotEndpointsList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.maintenance"></a>

```typescript
public readonly maintenance: MysqlMysqlBackupDbSystemSnapshotMaintenanceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList">MysqlMysqlBackupDbSystemSnapshotMaintenanceList</a>

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.secureConnections"></a>

```typescript
public readonly secureConnections: MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList">MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshot;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot">MysqlMysqlBackupDbSystemSnapshot</a>

---


### MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections">MysqlMysqlBackupDbSystemSnapshotSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupDbSystemSnapshotSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections">MysqlMysqlBackupDbSystemSnapshotSecureConnections</a>

---


### MysqlMysqlBackupDbSystemSnapshotSummaryList <a name="MysqlMysqlBackupDbSystemSnapshotSummaryList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get"></a>

```typescript
public get(index: number): MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlBackupDbSystemSnapshotSummary[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>[]

---


### MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlBackupDbSystemSnapshotSummary;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>

---


### MysqlMysqlBackupSourceDetailsOutputReference <a name="MysqlMysqlBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlMysqlBackupSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---


### MysqlMysqlBackupTimeoutsOutputReference <a name="MysqlMysqlBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer"></a>

```typescript
import { mysqlMysqlBackup } from 'rhizo-co-terraform-provider-oci'

new mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlMysqlBackupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

---



