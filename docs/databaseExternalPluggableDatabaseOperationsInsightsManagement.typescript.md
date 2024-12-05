# `databaseExternalPluggableDatabaseOperationsInsightsManagement` Submodule <a name="`databaseExternalPluggableDatabaseOperationsInsightsManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagement <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management oci_database_external_pluggable_database_operations_insights_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

new databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement(scope: Construct, id: string, config: DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig">DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig">DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalPluggableDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseExternalPluggableDatabaseOperationsInsightsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalPluggableDatabaseOperationsInsightsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalPluggableDatabaseOperationsInsightsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalPluggableDatabaseOperationsInsightsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput">enableOperationsInsightsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput">externalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseIdInput">externalPluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsights">enableOperationsInsights</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference</a>

---

##### `enableOperationsInsightsInput`<sup>Optional</sup> <a name="enableOperationsInsightsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsightsInput"></a>

```typescript
public readonly enableOperationsInsightsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="externalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorIdInput"></a>

```typescript
public readonly externalDatabaseConnectorIdInput: string;
```

- *Type:* string

---

##### `externalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="externalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseIdInput"></a>

```typescript
public readonly externalPluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.enableOperationsInsights"></a>

```typescript
public readonly enableOperationsInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.externalPluggableDatabaseId"></a>

```typescript
public readonly externalPluggableDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.Initializer"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

const databaseExternalPluggableDatabaseOperationsInsightsManagementConfig: databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights">enableOperationsInsights</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableOperationsInsights`<sup>Required</sup> <a name="enableOperationsInsights" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.enableOperationsInsights"></a>

```typescript
public readonly enableOperationsInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#enable_operations_insights DatabaseExternalPluggableDatabaseOperationsInsightsManagement#enable_operations_insights}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_database_connector_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_database_connector_id}.

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.externalPluggableDatabaseId"></a>

```typescript
public readonly externalPluggableDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#external_pluggable_database_id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#external_pluggable_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#id DatabaseExternalPluggableDatabaseOperationsInsightsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#timeouts DatabaseExternalPluggableDatabaseOperationsInsightsManagement#timeouts}

---

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.Initializer"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

const databaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts: databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#create DatabaseExternalPluggableDatabaseOperationsInsightsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#delete DatabaseExternalPluggableDatabaseOperationsInsightsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#update DatabaseExternalPluggableDatabaseOperationsInsightsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#create DatabaseExternalPluggableDatabaseOperationsInsightsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#delete DatabaseExternalPluggableDatabaseOperationsInsightsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_pluggable_database_operations_insights_management#update DatabaseExternalPluggableDatabaseOperationsInsightsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference <a name="DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseExternalPluggableDatabaseOperationsInsightsManagement } from 'rhizo-co-terraform-provider-oci'

new databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalPluggableDatabaseOperationsInsightsManagement.DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts">DatabaseExternalPluggableDatabaseOperationsInsightsManagementTimeouts</a>

---



