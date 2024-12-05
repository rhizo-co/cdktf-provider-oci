# `databaseExternalNonContainerDatabaseOperationsInsightsManagement` Submodule <a name="`databaseExternalNonContainerDatabaseOperationsInsightsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagement <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management oci_database_external_non_container_database_operations_insights_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

new databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement(scope: Construct, id: string, config: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalNonContainerDatabaseOperationsInsightsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalNonContainerDatabaseOperationsInsightsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalNonContainerDatabaseOperationsInsightsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput">enableOperationsInsightsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput">externalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseIdInput">externalNonContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsights">enableOperationsInsights</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseId">externalNonContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference</a>

---

##### `enableOperationsInsightsInput`<sup>Optional</sup> <a name="enableOperationsInsightsInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput"></a>

```typescript
public readonly enableOperationsInsightsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="externalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput"></a>

```typescript
public readonly externalDatabaseConnectorIdInput: string;
```

- *Type:* string

---

##### `externalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="externalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseIdInput"></a>

```typescript
public readonly externalNonContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.enableOperationsInsights"></a>

```typescript
public readonly enableOperationsInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

---

##### `externalNonContainerDatabaseId`<sup>Required</sup> <a name="externalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.externalNonContainerDatabaseId"></a>

```typescript
public readonly externalNonContainerDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.Initializer"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

const databaseExternalNonContainerDatabaseOperationsInsightsManagementConfig: databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights">enableOperationsInsights</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#enable_operations_insights DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#enable_operations_insights}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_database_connector_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalNonContainerDatabaseId">externalNonContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights"></a>

```typescript
public readonly enableOperationsInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#enable_operations_insights DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#enable_operations_insights}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_database_connector_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_database_connector_id}.

---

##### `externalNonContainerDatabaseId`<sup>Required</sup> <a name="externalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.externalNonContainerDatabaseId"></a>

```typescript
public readonly externalNonContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#external_non_container_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#id DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#timeouts DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#timeouts}

---

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.Initializer"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

const databaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts: databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#create DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#delete DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#update DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#create DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#delete DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_operations_insights_management#update DatabaseExternalNonContainerDatabaseOperationsInsightsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseExternalNonContainerDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

new databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseOperationsInsightsManagement.DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalNonContainerDatabaseOperationsInsightsManagementTimeouts</a>

---



